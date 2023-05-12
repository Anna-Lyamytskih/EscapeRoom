import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { reservationApi } from '../reservation-api/reservation-api';
import { BookingFormType, BookingInformation, BookingItem } from './types';

export type BookingitemList = BookingItem[]

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: baseQuery(),
  tagTypes: ['BookingItem'],
  endpoints: (builder) => ({
    getById: builder.query<BookingitemList, string | undefined>({
      query: (id = '') => `${APIRoute.Quests}/${id}${APIRoute.Booking}`,
      providesTags: ['BookingItem'],
    }),
    addItem: builder.mutation<BookingInformation, BookingFormType>({
      query: ({ questId, ...body }) => ({
        url: `${APIRoute.Quests}/${questId}${APIRoute.Booking}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BookingItem'],
      onCacheEntryAdded: (args, { dispatch }) => {
        dispatch(reservationApi.util.invalidateTags(['ReservationList']));
      }
    }),
  }),
});
