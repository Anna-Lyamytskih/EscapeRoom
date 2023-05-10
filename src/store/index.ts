import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer/root-reducer';
import { bookingApi } from './bookinng-process/booking-api';
import { reservationApi } from './reservation-process/api';
import { questApi } from './question-process/api-action';


export const api = createAPI();

// const middleware: any[] = [
//   // reservationApi.middleware,
//   // bookingApi.middleware,
//   // questApi.middleware,
// ]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(reservationApi.middleware).concat(bookingApi.middleware).concat(questApi.middleware)
});
