import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer/root-reducer';
import { bookingApi } from './bookinng-api/booking-api';
import { reservationApi } from './reservation-api/reservation-api';
import { questApi } from './quest-api/quest-api';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(reservationApi.middleware).concat(bookingApi.middleware).concat(questApi.middleware)
});
