import { createApi } from '@reduxjs/toolkit/query/react';
import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { Quest } from '../../types/quests';
import { Location } from '../../types/location';

export type ReservationItem = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}

export type ReservationList = ReservationItem[];


export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: baseQuery(),
  tagTypes: ['ReservationList', 'ReservationItem'],
  endpoints: (builder) => ({
    getList: builder.query<ReservationList, void>({
      query: () => `${APIRoute.MyQuests}`,
      providesTags: ['ReservationList'],
    }),
    getById: builder.query<ReservationList, string>({
      query: (id) => `${APIRoute.MyQuests}/${id}`,
      providesTags: ['ReservationItem'],
    }),
    deleteItem: builder.mutation<string, string>({
      query: (reservationId) => ({
        url: `${APIRoute.MyQuests}/${reservationId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ReservationList', 'ReservationItem'],
    }),
  }),
});
