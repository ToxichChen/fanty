import axios from "axios";
import { alert } from './../alertFeatures/AlertActions'
import { musicRequest, musicSuccess, musicError } from "./musicAction";

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const getMusic = (credentials) => async (dispatch) => {
    dispatch(musicRequest());

    try {
        const { data } = await axios.get("/music/getMusicList", credentials);

        token.set(data.access_token);
        if (data.length !== 0) {
            dispatch(musicSuccess(data))
        }
    } catch (error) {
        dispatch(musicError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

export { getMusic };
