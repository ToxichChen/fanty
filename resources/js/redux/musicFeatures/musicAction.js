import { createAction } from '@reduxjs/toolkit';

const musicRequest = createAction('music/musicRequest');
const musicSuccess = createAction('music/musicSuccess');
const musicError = createAction('music/musicError');

const musicMiniPlayer = createAction('music/player/miniPlayer');

export { musicRequest, musicSuccess, musicError, musicMiniPlayer };
