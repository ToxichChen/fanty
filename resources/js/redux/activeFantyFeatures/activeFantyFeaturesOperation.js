import axios from "axios";
import {
    fantyRequest,
    fantySuccess,
    fantyError,
    fantyLike,
    fantyPunishment,
    fantyPunishmentRequest,
    punishment,
} from "./activeFantyFeaturesActions";
import { alert } from "./../alertFeatures/AlertActions";

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const getActiveFanty = (obj) => async (dispatch) => {
    dispatch(fantyRequest());

    try {
        const { data } = await axios.post(`/fant/generate`, obj);
        dispatch(fantySuccess({ media: "", ...data }));
    } catch (error) {
        dispatch(fantyError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const likeFanty = (credentials) => async (dispatch) => {
    try {
        await axios.post("/fant/likeFant", credentials);
    } catch (error) {
        dispatch(fantyError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const disLikeFanty = (credentials) => async (dispatch) => {
    try {
        await axios.post("/fant/dislikeFan", credentials);
    } catch (error) {
        dispatch(fantyError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
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
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getPunishment = (credentials) => async (dispatch) => {
    dispatch(fantyPunishmentRequest());
    try {
        const { data } = await axios.post("/fant/getPunishment", credentials);

        dispatch(fantyPunishment({ media: "", ...data }));
    } catch (error) {
        dispatch(fantyPunishment(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getFinalPunishment = () => async (dispatch) => {
    dispatch(fantyPunishmentRequest());
    try {
        const { data } = await axios.get("/fant/getFinalPunishment");

        dispatch(fantyPunishment({ media: "", ...data[0] }));
    } catch (error) {
        dispatch(fantyPunishment(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getFinishFant = () => async (dispatch) => {
    dispatch(fantyRequest());
    try {
        const { data } = await axios.get("/fant/getFinishFant");

        dispatch(fantySuccess({ media: "", ...data }));
    } catch (error) {
        dispatch(fantyPunishment(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const changePunishment = (data) => async (dispatch) => {
    dispatch(punishment(data))
}

export {
    likeFanty,
    disLikeFanty,
    getActiveFanty,
    getFantyLike,
    getPunishment,
    getFinalPunishment,
    getFinishFant,
    changePunishment
};
