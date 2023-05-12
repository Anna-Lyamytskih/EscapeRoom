import BookingForm from '../../components/booking-form/booking-form';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';
import { bookingApi } from '../../store/bookinng-api/booking-api';
import { useParams } from 'react-router-dom';
import { questApi } from '../../store/quest-api/quest-api';
import { useEffect, useState } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { Helmet } from 'react-helmet-async';

const Booking = () => {
  const { id } = useParams();
  const questId = id;

  const { data: questData, isLoading: isLoadingQuest } = questApi.useGetByIdQuery(questId, { skip: !questId });
  const quest = questData;

  const { data: bookingData, isLoading: isLoadingBookingData } = bookingApi.useGetByIdQuery(`${questId || ''}`, { skip: !questId });
  const bookingItem = bookingData?.[0];

  const [selectedId, setSelectedId] = useState<string | undefined>(bookingItem?.id);

  const selectedItem = bookingData?.find((item) => item.id === selectedId);

  useEffect(() => {
    setSelectedId(bookingItem?.id);
  }, [bookingItem?.id]);

  if (isLoadingQuest || isLoadingBookingData) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Бронирование квеста - Escape Room</title>
      </Helmet>
      <Path />
      <div className="wrapper">
        <Header />
        <main className="page-content decorated-page">
          <Decor />
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">
                Бронирование квеста
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
                        list={bookingData}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                      />
                    )}
                  </div>
                </div>
                <p className="booking-map__address">{selectedItem?.location.address}</p>
              </div>
            </div>
            {selectedItem && (
              <BookingForm
                quest={quest}
                selectedItem={selectedItem}
              />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
