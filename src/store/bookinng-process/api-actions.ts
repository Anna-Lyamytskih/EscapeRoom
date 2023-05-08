import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../services/constants';
import { Place, PlaceId } from './types';
import { loadBookinQuestById, setBookinQuest, setNextBookinQuest } from './booking-process';

export const fetchBookingPlaceAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingPlace',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Place[]>(APIRoute.Booking);
    console.log(data)
    dispatch(setBookinQuest(data));
  },
);

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
  location: {
    address: string;
    coords: [number];
  }
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: LevelType;
    type: GenreType;
    peopleMinMax: [number];
  }
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

export const sendBookingPlaceAction = createAsyncThunk<void, BookingInformation, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendBookingPlace',
  async ({ placeId, date, time, contactPerson, phone, withChildren, peopleCount }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<BookingInformation>(`${APIRoute.Quests}/${id}/${APIRoute.Booking}`, { placeId, date, time, contactPerson, phone, withChildren, peopleCount });
      //TODO куда надо диспатчить эту хуйню? По идее нужно отправить данные в мои брони. А куда это? хуй знает блять
      //TODO может при нажатии кнопки зарезервировать нужно диспатчить полученные данные, а не здесь?
      dispatch(fetchReservationAction(data));
      // dispatch(fetchBookingPlaceAction({ id: placeId }));
    } catch (err) {
      throw err;
    }
  });
