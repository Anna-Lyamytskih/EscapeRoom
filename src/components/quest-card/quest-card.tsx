import { Link, generatePath, useLocation } from 'react-router-dom';
import { Quest } from '../../types/quests';
import { AppRoute } from '../../router/constants';
import { reservationApi } from '../../store/reservation-api/reservation-api';
import { listLevel } from '../../constants';
import { Location } from '../../types/location';
import { listDate } from './constants';

type QuestCardProps = {
  quest: Partial<Quest>;
  location?: Location;
  date?: 'today' | 'tomorrow';
  time?: string;
  peopleCount?: number;
  itemId?: string;
};

const QuestCard = ({ quest, location, date, time, peopleCount, itemId }: QuestCardProps) => {
  const locations = useLocation();

  const [deleteItem] = reservationApi.useDeleteItemMutation();

  const handleDeleteItem = (id: string) => {
    deleteItem(id);
  };

  const link = generatePath(AppRoute.Quest, {
    id: `${quest?.id || ''}`,
  });

  const levelOption = listLevel.find((item) => item.value === quest.level);
  const dateOption = listDate.find((item) => item.value === date);
  const locationPathName = locations.pathname === '/reservation';

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.previewImgWebp} />
          <img src={quest.previewImg} srcSet={quest.previewImgWebp} width="344" height="232" alt="" />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={link}>
            {quest.title}
          </Link>
          {locationPathName &&
            <span className="quest-card__info"> {dateOption?.title},{time}. {location?.address} </span>}
        </div>
        <ul className="tags quest-card__tags">
          {!locationPathName &&
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {quest?.peopleMinMax?.[0]}&ndash;{quest?.peopleMinMax?.[1]}&nbsp;чел
            </li>}
          {locationPathName &&
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {peopleCount}&nbsp;чел
            </li>}
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{levelOption?.title}
          </li>
        </ul>
        {locationPathName && quest?.id
          ? (
            <button
              className="btn btn--accent btn--secondary quest-card__btn"
              type="button"
              onClick={() => handleDeleteItem(itemId as string)}
            >
              Отменить
            </button>
          )
          : ''}
      </div>
    </div>
  );
};

export default QuestCard;
