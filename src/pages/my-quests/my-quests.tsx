import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import { reservationApi } from '../../store/reservation-process/api';
import QuestCard from '../../components/quest-card/quest-card';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { toast } from 'react-toastify';


const MyQuests = () => {
  const { data, isLoading, isError } = reservationApi.useGetListQuery();
  console.log('mequests', data)
  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    toast.error('Unfortunately, we can\'t show your booked quest information');
  }

  return (
    <>
      <Title />
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
                <QuestCard key={item.id} quest={item.quest} location={item.location} date={item.date} time={item.time} peopleCount={item.peopleCount} itemId={item.id} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MyQuests;
