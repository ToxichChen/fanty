import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
    settingsSuccess,
    settingsError,
    settingsRequest,
    settingsGameData,
    usersSetting,
    durationGameData,
} from "./SettingsAction";

const settings = createReducer([], {
    [settingsSuccess.type]: (_, { payload }) => [...payload],
});

const settingsErrorMessage = createReducer(null, {
    [settingsError.type]: (_, { payload }) => ({
        ...payload,
    }),
});

const settingsGame = createReducer([], {
    [settingsGameData.type]: (_, { payload }) => [...payload],
});

const isLoadingSettings = createReducer(false, {
    [settingsRequest.type]: () => true,
    [settingsSuccess.type]: () => false,
});

const users = createReducer(
    { is_man: "", is_female: "" },
    {
        [usersSetting.type]: (_, { payload }) => ({ ...payload }),
    }
);

const durationGame = createReducer(
    { is_green: "0", is_yellow: "0", is_red: "0" },
    {
        [durationGameData.type]: (_, { payload }) => ({ ...payload }),
    }
);

export default combineReducers({
    settings,
    settingsErrorMessage,
    isLoadingSettings,
    settingsGame,
    users,
    durationGame,
});
