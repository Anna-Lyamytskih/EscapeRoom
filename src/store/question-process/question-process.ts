import { getSortingQuests, getSortingQuestsLevel } from '../../components/utils.ts/utils';
import { NameSpace } from '../../constants';
import { useAppSelector } from '../../hooks';
import { Quest, Quests, SortingTypesGenre, SortingTypesLevel } from '../../types/quests';
import { QuestionProcess } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: QuestionProcess = {
  quests: [],
  filteredQuests: [],
  isQuestsDataLoading: false,
  quest: null,
  id: null,
  filter: {
    genre: SortingTypesGenre.All,
    level: SortingTypesLevel.All,
  },
};

export const questProcessSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    loadQuests: (state, action: PayloadAction<Quests[]>) => {
      state.quests = action.payload;
    },
    setIsQuestsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isQuestsDataLoading = action.payload;
    },
    changeSortGenre: (state, action: PayloadAction<SortingTypesGenre>) => {
      state.filter.genre = action.payload;
    },
    changeSortLevel: (state, action: PayloadAction<SortingTypesLevel>) => {
      state.filter.level = action.payload;
    },
    loadQuestById: (state, action: PayloadAction<Quest | null>) => {
      state.quest = action.payload;
    },
    questIdChange: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
    // questsFiltered: (state, action: PayloadAction<Quests[]>) => {
    //   state.filter = action.payload;
    // },
  },
});

export const useGetFilteredQuests = () => {
  const quests = useAppSelector((state) => state.QUESTS.quests);
  const filter = useAppSelector((state) => state.QUESTS.filter);
  console.log('useGetFilteredQuests filter', filter);

  const filteredByGenre = getSortingQuests(quests, filter.genre);
  const filteredByLevel = getSortingQuestsLevel(filteredByGenre, filter.level);

  return filteredByLevel
}

export const { loadQuests, setIsQuestsDataLoading, changeSortGenre, changeSortLevel, loadQuestById, questIdChange } = questProcessSlice.actions;
