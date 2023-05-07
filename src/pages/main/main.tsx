import FilterItemList from '../../components/filter-item-list/difficulty-filter-list';
import Footer from '../../components/footer/footer';
import GenreFilterList from '../../components/genre-filter-list/genre-filter-list';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import QuestCardList from '../../components/quest-card-list/quest-card-list';
import { useGetFilteredQuests } from '../../store/question-process/question-process';

const Main = () => {
  const quests = useGetFilteredQuests();

  //TODO сделать фильтрацию (при обновлении сайта фильтрация сбрасывается)
  //TODOне отображается изображение при переходе к карточке
  //TODO создать авторизацию
  //TODO разобраться с leathlet - картой для бронирования(при бронировании выходит список мест (метки) с информацией)
  //TODO разобраться с формой бронирования

  return (
    <>
      <Title />
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
