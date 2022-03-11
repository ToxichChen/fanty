import axios from "axios";
import { musicRequest, musicSuccess, musicError } from "./musicAction";

axios.defaults.baseURL = `http://${document.location.host}/api`;

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
        const { data } = await axios.post("/auth/login", credentials);

        token.set(data.access_token);
        dispatch(musicSuccess(data));
    } catch (error) {
        dispatch(musicError(error.message));
    }
};

export { getMusic };
