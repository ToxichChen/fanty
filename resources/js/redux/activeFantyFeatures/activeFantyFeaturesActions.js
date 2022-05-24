import { createAction } from "@reduxjs/toolkit";

const fantyRequest = createAction("fanty/fantyRequest");
const fantySuccess = createAction("fanty/fantySuccess");
const fantyError = createAction("fanty/fantyError");
const fantyCounterCanceledTask = createAction("fanty/fantyCanceledTask");
const fantyLevel = createAction("fanty/fantyLevel");
const fantyNumberTask = createAction("fanty/fantyNumberTask");
const fantyLike = createAction("fanty/fantyLikes");
const fantyPunishmentRequest = createAction("fanty/fantyPunishment/Request");
const fantyPunishment = createAction("fanty/fantyPunishment");
const punishment = createAction('fanty/punishment');
const sex = createAction('fanty/sex');

export {
    fantyRequest,
    fantySuccess,
    fantyError,
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantyLike,
    fantyPunishment,
    fantyPunishmentRequest,
    punishment,
    sex
};
