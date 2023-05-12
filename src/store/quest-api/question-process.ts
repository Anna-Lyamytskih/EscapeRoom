import { NameSpace } from '../../constants';
import { SortingTypesGenre, SortingTypesLevel } from '../../types/quests';
import { QuestionProcess } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: QuestionProcess = {
  filter: {
    genre: SortingTypesGenre.All,
    level: SortingTypesLevel.All,
  },
};

export const questProcessSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    changeSortGenre: (state, action: PayloadAction<SortingTypesGenre>) => {
      state.filter.genre = action.payload;
    },
    changeSortLevel: (state, action: PayloadAction<SortingTypesLevel>) => {
      state.filter.level = action.payload;
    },
  }
});

export const { changeSortGenre, changeSortLevel } = questProcessSlice.actions;
