import { Quest, Quests } from '../../types/quests';

export type QuestionProcess = {
  quests: Quests[];
  filteredQuests: Quests[];
  isQuestsDataLoading: boolean;
  quest: Quest | null;
  id: number | null;
  filter: {
    genre: string;
    level: string;
  };
}
