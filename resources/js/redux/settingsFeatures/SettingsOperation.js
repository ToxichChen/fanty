import axios from "axios";
import { alert } from './../alertFeatures/AlertActions'
import {
    settingsRequest,
    settingsSuccess,
    settingsError,
} from "./SettingsAction";

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    },
};

const getSettings = () => async (dispatch) => {
    dispatch(settingsRequest());

    try {
        const { data } = await axios.get("/settings/get");

        token.set(data.access_token);
        dispatch(settingsSuccess(data));
    } catch (error) {
        dispatch(settingsError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const postSettingsCountTask = (credentials) => async (dispatch) => {
    try {
        await axios.post("/settings/gameDuration/send", credentials);
    } catch (error) {
        dispatch(settingsError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const postSettingsGame = (settingsGame, man, female) => async (dispatch) => {
    try {
        await axios.post("/settings/send", [
            settingsGame,
            { is_man: man, is_female: female },
        ]);
    } catch (error) {
        dispatch(settingsError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const postPlayersGame = (credentials) => async (dispatch) => {
    try {
        await axios.get("/settings/get", credentials);
    } catch (error) {
        dispatch(settingsError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

export {
    getSettings,
    postSettingsCountTask,
    postSettingsGame,
    postPlayersGame,
};
