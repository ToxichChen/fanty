import axios from "axios";
import {
    settingsRequest,
    settingsSuccess,
    settingsError,
} from "./SettingsAction";

axios.defaults.baseURL = "http://localhost/api";

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    },
};

const getSettings = (credentials) => async (dispatch) => {
    dispatch(settingsRequest());

    try {
        const { data } = await axios.get("/settings/get", credentials);

        token.set(data.access_token);
        dispatch(settingsSuccess([data]));
    } catch (error) {
        dispatch(settingsError(error.message));
    }
};

const postSettingsCountTask = (credentials) => async (dispatch) => {
    try {
        await axios.post("/settings/gameDuration/send", credentials);
    } catch (error) {
        dispatch(settingsError(error.message));
    }
};

const postSettingsGame = (credentials) => async (dispatch) => {
    try {
        await axios.post("/settings/send", credentials);
    } catch (error) {
        dispatch(settingsError(error.message));
    }
};

const postPlayersGame = (credentials) => async (dispatch) => {
    try {
        await axios.get("/settings/get", credentials);
    } catch (error) {
        dispatch(settingsError(error.message));
    }
};

export {
    getSettings,
    postSettingsCountTask,
    postSettingsGame,
    postPlayersGame,
};
