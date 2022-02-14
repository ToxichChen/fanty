import { createAction } from "@reduxjs/toolkit";

const settingsRequest = createAction("settings/settingsRequest");
const settingsGameData = createAction("settings/settingsGame", (payload) => ({
    payload,
}));
const settingsSuccess = createAction("settings/settingsSuccess", (payload) => ({
    payload,
}));
const settingsError = createAction("settings/settingsError", (payload) => ({
    payload,
}));
const usersSetting = createAction("settings/users", (payload) => ({
    payload,
}));

const durationGameData = createAction("settings/gameDuration", (payload) => ({
    payload,
}));

export {
    settingsRequest,
    settingsSuccess,
    settingsError,
    settingsGameData,
    usersSetting,
    durationGameData,
};
