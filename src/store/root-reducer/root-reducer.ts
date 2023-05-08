import { combineReducers } from '@reduxjs/toolkit';
import { questProcessSlice } from '../question-process/question-process';
import { userProcessSlice } from '../user-process/user-process';
import { bookingProcessSlice } from '../bookinng-process/booking-process';

export const rootReducer = combineReducers({
  [questProcessSlice.name]: questProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
  [bookingProcessSlice.name]: bookingProcessSlice.reducer,
});
