import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { musicSuccess, musicError, musicMiniPlayer } from "./musicAction";

const musicList = createReducer(null, {
    [musicSuccess]: (_, { payload }) => payload.access_token,
    [musicError]: (_, { payload }) => payload.access_token,
});

const miniPlayer = createReducer(
    { showPlayer: true },
    {
        [musicMiniPlayer]: (_, { payload }) => payload.access_token,
    }
);

export default combineReducers({ musicList, miniPlayer });
