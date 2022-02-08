import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
    fantySuccess,
    fantyRequest,
    fantyError,
    fantyCounterCanceledTask,
} from "./activeFantyFeaturesActions";

const fanty = createReducer(
    {},
    {
        [fantySuccess]: (_, { payload }) => ({
            ...payload,
        }),
    }
);

const activeFantyError = createReducer(
    {},
    {
        [fantyError]: (_, { payload }) => payload,
    }
);

const isLoadingFanty = createReducer(false, {
    [fantyRequest.type]: () => true,
    [fantySuccess.type]: () => false,
});

const countCanceledTask = createReducer(
    { type: "fanty/fantyCanceledTask", payload: 0 },
    {
        [fantyCounterCanceledTask]: (_, payload) => payload,
    }
);

export default combineReducers({
    fanty,
    activeFantyError,
    isLoadingFanty,
    countCanceledTask,
});
