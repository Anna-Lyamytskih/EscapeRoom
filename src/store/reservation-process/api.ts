import { createApi } from '@reduxjs/toolkit/query/react';
import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { Quest } from '../../types/quests';
import { Location } from '../../types/location';
import { BookingFormType } from '../../components/booking-form/booking-form';

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
  baseQuery,
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
    deleteItem: builder.mutation<string, any>({
      query: (reservationId) => ({
        url: `${APIRoute.MyQuests}/${reservationId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ReservationList'],
    }),
    addItem: builder.mutation<ReservationItem, BookingFormType>({
      query: (body) => ({
        url: `${APIRoute.MyQuests}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ReservationList'],
    }),
  }),
})
// TODO нужно получать значения забронированных,
// при нажатии на кнопку отменить бронь по айдишнику нужно искать нужный и убирать из списка забронированных квестов
// это знаичт нужно диспатчить айдишник при удалении?
// Плюс сюда в список забронированных нужно както-то добавлять новые забронированные, а это значит передавать всю информацию
// что пользователь внес в карточку бронирования, в форме мы должны диспатчить данные
