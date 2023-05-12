import { combineReducers } from '@reduxjs/toolkit';
import { questProcessSlice } from '../quest-api/question-process';
import { userProcessSlice } from '../user-process/user-process';
import { bookingApi } from '../booking-api/booking-api';
import { reservationApi } from '../reservation-api/reservation-api';
import { questApi } from '../quest-api/quest-api';

export const rootReducer = combineReducers({
  [questProcessSlice.name]: questProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
  [reservationApi.reducerPath]: reservationApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
  [questApi.reducerPath]: questApi.reducer,
});
