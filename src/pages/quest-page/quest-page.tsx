import { Link, generatePath, useLocation, useParams } from 'react-router-dom';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, listGenre, listLevel } from '../../constants';
import { AppRoute } from '../../router/constants';
import { questApi } from '../../store/question-process/api-action';
import { useHistoryRedirect } from '../../hooks/useHistoryRedirect';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { toast } from 'react-toastify';

const QuestPage = () => {
  const { id } = useParams();
  const questId = id;

  const location = useLocation();
  const { data, isLoading, isError } = questApi.useGetByIdQuery(questId, { skip: !questId });
  const quest = data;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const linkToLogin = generatePath(AppRoute.Login);

  const linkToBooking = generatePath(AppRoute.Booking, {
    id: `${questId || ''}`,
  });

  const { saveUrl } = useHistoryRedirect();

  const onLoginRedirect = () => {
    saveUrl(location.pathname);
  };

  const levelOption = listLevel.find((item) => item.value === quest?.level);
  const genreOption = listGenre.find((item) => item.value === quest?.type);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    toast.error('Unfortunately, we can\'t show quest information');
  }

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
              <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{genreOption?.title}
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
                  </svg>{levelOption?.title}
                </li>
              </ul>
              <p className="quest-page__description">{quest?.description}</p>
              {authorizationStatus === AuthorizationStatus.Auth ?
                <Link className="btn btn--accent btn--cta quest-page__btn" to={linkToBooking}>Забронировать</Link> :
                <Link className="btn btn--accent btn--cta quest-page__btn" onClick={onLoginRedirect} to={linkToLogin}>Забронировать</Link>}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default QuestPage;
