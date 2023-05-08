import { combineReducers } from '@reduxjs/toolkit';
import { questProcessSlice } from '../question-process/question-process';
import { userProcessSlice } from '../user-process/user-process';
import { bookingProcessSlice } from '../bookinng-process/booking-process';
import { bookingApi } from '../bookinng-process/booking-api';
import { reservationApi } from '../reservation-process/api';
import { questApi } from '../question-process/api-action';

export const rootReducer = combineReducers({
  [questProcessSlice.name]: questProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
  [bookingProcessSlice.name]: bookingProcessSlice.reducer,
  [reservationApi.reducerPath]: reservationApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
  [questApi.reducerPath]: questApi.reducer,
});
