import { Quest, Quests } from '../../types/quests';
import { APIRoute } from '../../services/constants';
import { baseQuery } from '../../services/api';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const questApi = createApi({
  reducerPath: 'questApi',
  baseQuery,
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

// export const fetchQuestsAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchQuests',
//   async (_arg, { dispatch, extra: api }) => {
//     dispatch(setIsQuestsDataLoading(true));
//     const { data } = await api.get<Quests[]>(APIRoute.Quests);
//     dispatch(setIsQuestsDataLoading(false));
//     dispatch(loadQuests(data));
//   },
// );

// export const fetchQuestByIdAction = createAsyncThunk<void, QuestId, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchQuestById',
//   async ({ id }, { dispatch, extra: api }) => {
//     try {
//       const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
//       dispatch(loadQuestById(data));
//     } catch (e) {

//       throw e;
//     }
//   },
// );
