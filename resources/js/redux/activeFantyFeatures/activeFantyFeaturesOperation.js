import axios from "axios";
import {
    fantyRequest,
    fantySuccess,
    fantyError,
} from "./activeFantyFeaturesActions";

axios.defaults.baseURL = "http://localhost/api";

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const getActiveFanty = (obj, setFant) => async (dispatch) => {
    dispatch(fantyRequest());

    try {
        const { data } = await axios.post(`/fant/generate`, obj);
        token.set(data.access_token);
        dispatch(fantySuccess(data));

        setFant(data);
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const activeFantyLikeFanty = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.post("", credentials);
        token.set(data.access_token);

        dispatch(fantySuccess(data));
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const activeFantyDisLikeFanty = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.post("", credentials);
        token.set(data.access_token);

        dispatch(fantySuccess(data));
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

export { activeFantyLikeFanty, activeFantyDisLikeFanty, getActiveFanty };
