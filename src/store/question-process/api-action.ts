import { Quest, Quests } from '../../types/quests';
import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const questApi = createApi({
  reducerPath: 'questApi',
  baseQuery: baseQuery(),
  tagTypes: ['Quests'],
  endpoints: (builder) => ({
    getList: builder.query<Quests, void>({
      query: () => `${APIRoute.Quests}`,
      providesTags: (result) => ['Quests'],
    }),
    getById: builder.query<Quest, string | undefined>({
      query: (id = '') => `${APIRoute.Quests}/${id}`,
    }),
  }),
});

