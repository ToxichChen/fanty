import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
    settingsSuccess,
    settingsError,
    settingsRequest,
    settingsGameData,
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

export default combineReducers({
    settings,
    settingsErrorMessage,
    isLoadingSettings,
    settingsGame,
});
