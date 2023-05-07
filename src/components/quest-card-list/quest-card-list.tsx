import { Quests } from '../../types/quests';
import QuestCard from '../quest-card/quest-card';

type QuestCardListProps = {
  quests: Quests[];
};

const QuestCardList = ({ quests }: QuestCardListProps) => (
  <div className="cards-grid">
    {quests.map((quest: Quests) => (
      <QuestCard quest={quest} key={quest.id} />
    ))}
  </div >
);

export default QuestCardList;
