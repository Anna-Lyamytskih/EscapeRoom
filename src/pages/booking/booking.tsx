import BookingForm from '../../components/booking-form/booking-form';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';

const Booking = () => (
  <>
    <head>
      <Title />
    </head>
    <body>
      <Path />
      <div className="wrapper">
        <Header />
        <main className="page-content decorated-page">
          <Decor />
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
            </div>
            <Map />
            <BookingForm />
          </div>
        </main>
        <Footer />
      </div>
    </body>
  </>
);


export default Booking;
