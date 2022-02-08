import { createAction } from "@reduxjs/toolkit";

const fantyRequest = createAction("fanty/fantyRequest");
const fantySuccess = createAction("fanty/fantySuccess");
const fantyError = createAction("fanty/fantyError");
const fantyCounterCanceledTask = createAction("fanty/fantyCanceledTask");

export { fantyRequest, fantySuccess, fantyError, fantyCounterCanceledTask };
