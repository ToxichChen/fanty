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

const getSettings = () => async (dispatch) => {
    dispatch(settingsRequest());

    try {
        const { data } = await axios.get("/settings/get");

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

const postSettingsGame = (settingsGame, man, female) => async (dispatch) => {
    try {
        await axios.post("/settings/send", [
            settingsGame,
            { is_man: man, is_female: female },
        ]);
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
