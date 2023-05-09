import BookingForm from '../../components/booking-form/booking-form';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';
import { bookingApi } from '../../store/bookinng-process/booking-api';
import { useParams } from 'react-router-dom';
import { questApi } from '../../store/question-process/api-action';
import { useState } from 'react';


const Booking = () => {
  const { id } = useParams();
  const questId = id;

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: questData } = questApi.useGetByIdQuery(questId, { skip: !questId });
  const quest = questData;

  const { data: bookingData } = bookingApi.useGetByIdQuery(`${questId || ''}`, { skip: !questId });
  const bookingItem = bookingData?.[0];
  // TODO из bookingData мы получаем информацию о доступном времени я так понимаю
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
                      {bookingItem && (
                        <Map
                          place={bookingItem}
                          list={[bookingItem]}
                          selectedId={selectedId}
                          setSelectedId={setSelectedId}
                        />
                      )}
                    </div>
                  </div>
                  <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
                </div>
              </div>
              <BookingForm
                quest={quest}
                bookingData={bookingData}
                key={quest?.id}
                selectedId={selectedId}
              />
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Booking;
