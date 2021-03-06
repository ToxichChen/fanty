import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
    fantySuccess,
    fantyRequest,
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantyLike,
    fantyPunishment,
    fantyPunishmentRequest,
    punishment,
    sex
} from "./activeFantyFeaturesActions";

const fanty = createReducer(
    { media: "" },
    {
        [fantySuccess]: (_, { payload }) => ({
            ...payload,
        }),
    }
);

const fantyPunishmentUser = createReducer(
    { media: "" },
    {
        [fantyPunishment]: (_, { payload }) => ({
            ...payload,
        }),
    }
);

const isLoadingFanty = createReducer(false, {
    [fantyRequest.type]: () => true,
    [fantySuccess.type]: () => false,
    [fantyPunishmentRequest.type]: () => true,
    [fantyPunishment.type]: () => false,
});

const levelFanty = createReducer("", {
    [fantyLevel.type]: (_, { payload }) => payload,
});

const numberFanty = createReducer(
    { type: "fanty/fantyNumberTask", payload: 0 },
    {
        [fantyNumberTask]: (_, payload) => payload,
    }
);

const countCanceledTask = createReducer(
    { type: "fanty/fantyCanceledTask", payload: 0 },
    {
        [fantyCounterCanceledTask]: (_, payload) => payload,
    }
);

const like = createReducer("", {
    [fantyLike.type]: (_, { payload }) => payload,
});

const isPunishment = createReducer(false, {
    [punishment.type]: (_, {payload}) => payload,
});

const sexFant = createReducer(2, {
    [sex.type]: (_, {payload}) => payload,
});

export default combineReducers({
    fanty,
    countCanceledTask,
    numberFanty,
    fantyPunishmentUser,
    isLoadingFanty,
    levelFanty,
    like,
    isPunishment,
    sexFant
});
