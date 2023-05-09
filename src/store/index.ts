import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer/root-reducer';
import { bookingApi } from './bookinng-process/booking-api';
import { reservationApi } from './reservation-process/api';


export const api = createAPI();

const middleware: any[] = [
  // reservationApi.middleware,
  // bookingApi.middleware,
  // questApi.middleware,
  //authorizationApi.middleware,
]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(...middleware)
});
