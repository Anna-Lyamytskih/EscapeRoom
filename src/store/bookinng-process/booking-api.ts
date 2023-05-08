import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export type BookingInformation = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type Date = {
  today: string;
  tomorrow: string;
};

export const bookingApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery,
  tagTypes: ['BookingList', 'BookingItem'],
  endpoints: (builder) => ({
    getById: builder.query<BookingInformation[], string | undefined>({
      query: (id = '') => `${APIRoute.Quests}/${id}/${APIRoute.Booking}`,
      providesTags: ['BookingItem'],
    }),
    addItem: builder.mutation<BookingInformation, BookingInformation>({
      query: (body) => ({
        url: `${APIRoute.Quests}/${body.placeId}/${APIRoute.Booking}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BookingList', 'BookingItem'],
    }),
  }),
});

//TODO нужно открыть нужную карточку с данными бронирования это значит нужно как-то айдишник карточки передавать
// чтобы потом среди данных бронирования находить нужную карточку с информацией? При том, что при бронировании выбирается время
// и то время что уже забронировано не может быть выбрано (свойство isAvailable)
// и если бронирвоание удаляет пользователь, данные обновляются и время снова становится свободное для брони
