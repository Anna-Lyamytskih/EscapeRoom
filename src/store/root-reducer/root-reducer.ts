import { combineReducers } from '@reduxjs/toolkit';
import { questProcessSlice } from '../question-process/question-process';

export const rootReducer = combineReducers({
  [questProcessSlice.name]: questProcessSlice.reducer,
});
