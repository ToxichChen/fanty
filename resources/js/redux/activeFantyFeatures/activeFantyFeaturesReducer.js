import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { fantySuccess, fantyError } from './activeFantyFeaturesActions';

const fanty = createReducer(
  { likes: 0, disLikes: 0 },
  {
    [fantySuccess]: (_, { payload }) => ({
      ...payload,
    }),
  }
);

const activeFantyError = createReducer(null, {
  [fantyError]: (_, { payload }) => payload,
});

export default combineReducers({
  fanty,
  activeFantyError,
});
