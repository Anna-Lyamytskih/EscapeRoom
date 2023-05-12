import { getSortingQuests, getSortingQuestsLevel } from '../../components/utils.ts/utils';
import { NameSpace } from '../../constants';
import { useAppSelector } from '../../hooks';
import { SortingTypesGenre, SortingTypesLevel } from '../../types/quests';
import { questApi } from './quest-api';
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

export const useGetFilteredQuests = () => {
  const { data } = questApi.useGetListQuery();
  const filter = useAppSelector((state) => state.QUESTS.filter);
  const filteredByGenre = getSortingQuests(data, filter.genre);
  const filteredByLevel = getSortingQuestsLevel(filteredByGenre, filter.level);

  return filteredByLevel;
};

export const { changeSortGenre, changeSortLevel } = questProcessSlice.actions;
