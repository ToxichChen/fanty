import { createReducer } from "@reduxjs/toolkit";
import { alert } from "./AlertActions";

const alertMessage = createReducer(
    { show: false, err: false, message: "" },
    {
        [alert]: (_, { payload }) => ({
            ...payload,
        }),
    }
);

export default alertMessage;
