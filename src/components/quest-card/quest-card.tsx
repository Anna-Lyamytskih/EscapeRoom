import { Link, generatePath, useLocation } from 'react-router-dom';
import { Quest } from '../../types/quests';
import { AppRoute } from '../../router/constants';
import { reservationApi } from '../../store/reservation-process/api';
import { listLevel } from '../../constants';

type QuestCardProps = {
  quest: Partial<Quest>;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  const location = useLocation();

  const [deleteItem] = reservationApi.useDeleteItemMutation();

  const handleDeleteItem = (id: string | undefined) => {
    deleteItem(id);
  };

  const link = generatePath(AppRoute.Quest, {
    id: `${quest?.id || ''}`,
  });

  const levelOption = listLevel.find((item) => item.value === quest.level);

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.previewImgWebp} />
          <img src={quest.previewImg} srcSet={quest.previewImgWebp} width="344" height="232" alt="Мужчина в маске в тёмном переходе." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={link}>
            {quest.title}
          </Link>
          {location.pathname === '/reservation' ? <span className="quest-card__info"> [сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br />м. Петроградская] n</span> : ''}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest?.peopleMinMax?.[0]}&ndash;{quest?.peopleMinMax?.[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{levelOption?.title}
          </li>
        </ul>
        {location.pathname === '/reservation' ? <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={() => handleDeleteItem(quest?.id)}> Отменить</button> : ''}
      </div>
    </div>
  );
};
export default QuestCard;
