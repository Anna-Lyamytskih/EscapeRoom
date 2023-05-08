import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Place, bookingProcess } from './types';
import { ReservationQuest } from './api-actions';

const initialState: bookingProcess = {
  places: [],
  place: null,
  isAvailable: false,
  nextBookinQuest: null,
};

export const bookingProcessSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    setBookinQuest: (state, action: PayloadAction<ReservationQuest[]>) => {
      state.places = action.payload;
    },
    loadBookinQuestById: (state, action: PayloadAction<Place | null>) => {
      state.place = action.payload;
    },
    loadAviableStatus: (state, action: PayloadAction<boolean>) => {
      state.isAvailable = action.payload;
    },
    setNextBookinQuest: (state, action: PayloadAction<Place | null>) => {
      state.nextBookinQuest = action.payload;
    },
  },
});

export const { setBookinQuest, loadBookinQuestById, loadAviableStatus, setNextBookinQuest } = bookingProcessSlice.actions;
