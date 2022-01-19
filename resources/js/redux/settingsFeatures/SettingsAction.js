import { createAction } from '@reduxjs/toolkit';

const settingsRequest = createAction('settings/settingsRequest');
const settingsSuccess = createAction('settings/settingsSuccess', (payload) => ({
  payload,
}));
const settingsError = createAction('settings/settingsError', (payload) => ({
  payload,
}));

export { settingsRequest, settingsSuccess, settingsError };
