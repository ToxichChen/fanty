import axios from "axios";
import {
    fantyRequest,
    fantySuccess,
    fantyError,
    fantyLike,
    fantyPunishment,
} from "./activeFantyFeaturesActions";

axios.defaults.baseURL = "http://localhost/api";

const getActiveFanty = (obj) => async (dispatch) => {
    dispatch(fantyRequest());

    try {
        const { data } = await axios.post(`/fant/generate`, obj);
        dispatch(fantySuccess(data));
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const likeFanty = (credentials) => async (dispatch) => {
    try {
        await axios.post("/fant/likeFant", credentials);
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const disLikeFanty = (credentials) => async (dispatch) => {
    try {
        await axios.post("/fant/dislikeFan", credentials);
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const getFantyLike = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            "/fant/checkLikedOrDisliked",
            credentials
        );

        dispatch(fantyLike(data));
    } catch (error) {
        dispatch(fantyError(error.message));
    }
};

const getPunishment = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.post("/fant/getPunishment", credentials);

        dispatch(fantyPunishment({ media: "", ...data }));
    } catch (error) {
        dispatch(fantyPunishment(error.message));
    }
};

const getFinalPunishment = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            "/fant/getFinalPunishment",
            credentials
        );

        dispatch(fantyPunishment({ media: "", ...data }));
    } catch (error) {
        dispatch(fantyPunishment(error.message));
    }
};

export {
    likeFanty,
    disLikeFanty,
    getActiveFanty,
    getFantyLike,
    getPunishment,
    getFinalPunishment,
};
