import { Link, generatePath } from 'react-router-dom';
import { Quests } from '../../types/quests';
import { AppRoute } from '../../router/constants';

type QuestCardProps = {
  quest: Quests;
  page?: string;
}

const QuestCard = ({ quest, page }: QuestCardProps) => {
  const link = generatePath(AppRoute.Quest, {
    id: `${quest.id}`,
  });

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
          {page ? <span className="quest-card__info"> [сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br />м. Петроградская] n</span> : ''}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{quest.level}
          </li>
        </ul>
        {page ? <button className="btn btn--accent btn--secondary quest-card__btn" type="button"> Отменить</button> : ''}
      </div>
    </div>
  );
};
export default QuestCard;
