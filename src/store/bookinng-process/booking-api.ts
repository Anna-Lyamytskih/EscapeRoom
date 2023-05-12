import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { Location } from '../../types/quests';
import { reservationApi } from '../reservation-process/api';

export type BookingInformation = {
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  date: 'today' | 'tomorrow';
  time: string;
}

export type BookingFormType = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  peopleCount: number;
  withChildren: boolean;
  placeId: string;
  questId: string;
}

export type BookingItem = {
  id: string;
  location: Location;
  slots: {
    today: {
      time: string;
      isAvailable: boolean;
    }[];
    tomorrow: {
      time: string;
      isAvailable: boolean;
    }[];
  };
}

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
