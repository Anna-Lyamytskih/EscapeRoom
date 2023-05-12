import { useAppSelector } from '..';
import { getSortingQuests, getSortingQuestsLevel } from '../../components/utils.ts/utils';
import { questApi } from '../../store/quest-api/quest-api';

export const useGetFilteredQuests = () => {
  const { data } = questApi.useGetListQuery();
  const filter = useAppSelector((state) => state.QUESTS.filter);
  const filteredByGenre = getSortingQuests(data, filter.genre);
  const filteredByLevel = getSortingQuestsLevel(filteredByGenre, filter.level);

  return filteredByLevel;
};
