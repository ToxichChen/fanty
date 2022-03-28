import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { musicSuccess, musicError, musicMiniPlayer } from "./musicAction";
import { music_list } from "../../constants";

const musicList = createReducer([...music_list], {
    [musicSuccess]: (_, { payload }) => payload,
    [musicError]: (_, { payload }) => payload,
});

const miniPlayer = createReducer(
    {
        showPlayer: true,
        trackIndex: 0,
        play: false,
        currentTime: 1,
        duration: 1,
        random: false,
        volume: 1
    },
    {
        [musicMiniPlayer]: (_, { payload }) => ({
            ...payload,
        }),
    }
);

export default combineReducers({ musicList, miniPlayer });
