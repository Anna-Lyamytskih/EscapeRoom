import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { loadQuestById, loadQuests, setIsQuestsDataLoading } from './question-process';
import { Quest, QuestId, Quests } from '../../types/quests';
import { APIRoute } from '../../services/constants';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsQuestsDataLoading(true));
    const { data } = await api.get<Quests[]>(APIRoute.Quests);
    dispatch(setIsQuestsDataLoading(false));
    dispatch(loadQuests(data));
  },
);

export const fetchQuestByIdAction = createAsyncThunk<void, QuestId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestById',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuestById(data));
    } catch (e) {
      throw e;
    }
  },
);
