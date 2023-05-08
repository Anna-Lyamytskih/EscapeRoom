import BookingForm from '../../components/booking-form/booking-form';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';
import { useAppSelector } from '../../hooks';

const Booking = () => {
  const place = useAppSelector((state) => state.BOOKING.place);
  const quest = useAppSelector((state) => state.QUESTS.quest);
console.log(place)
console.log(quest)
  return (
    <>
      <head>
        <Title />
      </head>
      <body>
        <Path />
        <div className="wrapper">
          <Header />
          <main className="page-content decorated-page">
            <Decor img={quest} />
            <div className="container container--size-s">
              <div className="page-content__title-wrapper">
                <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
                </h1>
                <p className="title title--size-m title--uppercase page-content__title">{quest?.title}</p>
              </div>
              <div className="page-content__item">
                <div className="booking-map">
                  <div className="map">
                    <div className="map__container">
                      <Map place={place} />
                    </div>
                  </div>
                  <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
                </div>
              </div>
              <BookingForm place={place} />
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Booking;
