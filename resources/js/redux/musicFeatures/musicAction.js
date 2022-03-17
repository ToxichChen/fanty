import { createAction } from "@reduxjs/toolkit";

const musicSuccess = createAction("music/musicSuccess");
const musicError = createAction("music/musicError");

const musicMiniPlayer = createAction("music/player/miniPlayer", (payload) => ({
    payload,
}));
export { musicSuccess, musicError, musicMiniPlayer };
