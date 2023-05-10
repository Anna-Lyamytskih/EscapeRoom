import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import { reservationApi } from '../../store/reservation-process/api';
import QuestCard from '../../components/quest-card/quest-card';


const MyQuests = () => {
  const { data } = reservationApi.useGetListQuery();

  return (
    <>
      <head>
        <Title />
      </head>
      <body>
        <Path />
        <div className="wrapper">
          <header className="header">
            <Header />
          </header>
          <main className="page-content decorated-page">
            <Decor />
            <div className="container">
              <div className="page-content__title-wrapper">
                <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
              </div>
              <div className="cards-grid">
                {(data || []).map((item) => (
                  <QuestCard key={item.id} quest={item.quest} location={item.location} date={item.date} time={item.time} peopleCount={item.peopleCount} itemId={item.id}/>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default MyQuests;
