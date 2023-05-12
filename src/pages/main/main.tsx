import FilterItemList from '../../components/filter-item-list/difficulty-filter-list';
import Footer from '../../components/footer/footer';
import GenreFilterList from '../../components/genre-filter-list/genre-filter-list';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import QuestCardList from '../../components/quest-card-list/quest-card-list';
import { useGetFilteredQuests } from '../../store/quest-api/question-process';
import { questApi } from '../../store/quest-api/quest-api';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { Helmet } from 'react-helmet-async';

const Main = () => {
  const { isLoading } = questApi.useGetListQuery();
  const quests = useGetFilteredQuests();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
      <Path />
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="page-content">
          <div className="container">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
              </h1>
              <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
            </div>
            <div className="page-content__item">
              <form className="filter" action="#" method="get">
                <fieldset className="filter__section">
                  <GenreFilterList />
                </fieldset>
                <fieldset className="filter__section">
                  <legend className="visually-hidden">Сложность</legend>
                  <FilterItemList />
                </fieldset>
              </form>
            </div>
            <h2 className="title visually-hidden">Выберите квест</h2>
            <QuestCardList quests={quests} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
