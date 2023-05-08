import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../services/constants';
import { Place, PlaceId } from './types';
import { loadBookinQuestById, setBookinQuest, setNextBookinQuest } from './booking-process';
import { Quest } from '../../types/quests';
import { Location } from '../../types/location';

export const fetchQuestByIdAction = createAsyncThunk<void, PlaceId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestById',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Place>(`${APIRoute.Quests}/${id}/${APIRoute.Booking}`);
      console.log(data)
      dispatch(loadBookinQuestById(data));
    } catch (e) {
      throw e;
    }
  },
);

export enum LevelType {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum GenreType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}
export type ReservationQuest = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}

//TODO я отсюда по идее получаю те квесты, что зарезервированные, только откуда я ее получаю?
export const fetchReservationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservation',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<ReservationQuest[]>(APIRoute.MyQuests);
    console.log(data)
    dispatch(setBookinQuest(data));
  },
);
