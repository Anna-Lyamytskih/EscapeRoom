import { Link, generatePath, useParams } from 'react-router-dom';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuestByIdAction } from '../../store/question-process/api-action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../constants';
import { AppRoute } from '../../router/constants';

const QuestPage = () => {
  const { id } = useParams();
  const questId = id;

  const dispatch = useAppDispatch();

  const quest = useAppSelector((state) => state.QUESTS.quest);
  console.log(quest)
  useEffect(() => {
    dispatch(fetchQuestByIdAction({ id: questId }));
  }, [dispatch, questId]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const linkToLogin = generatePath(AppRoute.Login);

  const linkToBooking = generatePath(AppRoute.Booking, {
    id: `${quest?.id}`,
  });

  return (
    <>
      <Title />
      <Path />
      <div className="wrapper">
        <header className="header"> <Header /> </header>
        <main className="decorated-page quest-page">
          <Decor img={quest} />
          <div className="container container--size-l">
            <div className="quest-page__content">
              <h1 className="title title--size-l title--uppercase quest-page__title">{quest?.title}</h1>
              <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{quest?.type}
              </p>
              <ul className="tags tags--size-l quest-page__tags">
                <li className="tags__item">
                  <svg width="11" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-person"></use>
                  </svg>{quest?.peopleMinMax[0]}&ndash;{quest?.peopleMinMax[1]}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-level"></use>
                  </svg>{quest?.level}
                </li>
              </ul>
              <p className="quest-page__description">{quest?.description}</p>
              {authorizationStatus === AuthorizationStatus.Auth ?
                <Link className="btn btn--accent btn--cta quest-page__btn" to={linkToBooking}>Забронировать</Link> :
                <Link className="btn btn--accent btn--cta quest-page__btn" to={linkToLogin}>Забронировать</Link>}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default QuestPage;