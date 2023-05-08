import { Quests, SortingTypesGenre, SortingTypesLevel } from '../../types/quests';

export const getSortingQuests = (quests: Quests | undefined, activeSort: string) => {
  const sortingQuests = (quests || []).slice();

  switch (activeSort) {
    case SortingTypesGenre.Adventures: return sortingQuests.filter((quest) => quest.type === SortingTypesGenre.Adventures);
    case SortingTypesGenre.Detective: return sortingQuests.filter((quest) => quest.type === SortingTypesGenre.Detective);
    case SortingTypesGenre.Horror: return sortingQuests.filter((quest) => quest.type === SortingTypesGenre.Horror);
    case SortingTypesGenre.Mystic: return sortingQuests.filter((quest) => quest.type === SortingTypesGenre.Mystic);
    case SortingTypesGenre.SciFi: return sortingQuests.filter((quest) => quest.type === SortingTypesGenre.SciFi);
    default:
      return sortingQuests;
  }
};

export const getSortingQuestsLevel = (quests: Quests | undefined, activeSort: string) => {
  const sortingQuests = (quests || []).slice();

  switch (activeSort) {
    case SortingTypesLevel.Easy: return sortingQuests.filter((quest) => quest.level === SortingTypesLevel.Easy);
    case SortingTypesLevel.Medium: return sortingQuests.filter((quest) => quest.level === SortingTypesLevel.Medium);
    case SortingTypesLevel.Hard: return sortingQuests.filter((quest) => quest.level === SortingTypesLevel.Hard);
    default:
      return sortingQuests;
  }
};
