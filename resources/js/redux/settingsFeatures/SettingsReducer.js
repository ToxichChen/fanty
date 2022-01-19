import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { settingsSuccess, settingsError } from './SettingsAction';

const settings = createReducer([], {
  [settingsSuccess]: (_, { payload }) => ({
    ...payload,
  }),
});

const settingsErrorMessage = createReducer(null, {
  [settingsError]: (_, { payload }) => ({
    ...payload,
  }),
});

export default combineReducers({ settings, settingsErrorMessage });
