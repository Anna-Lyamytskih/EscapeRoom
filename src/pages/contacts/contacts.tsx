import ContactItem from '../../components/contact-item/contact-item';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_PLACE } from './constants';

const Contacts = () => (
  <>
    <Helmet>
      <title>Контакты - Escape Room</title>
    </Helmet>
    <Path />
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="page-content decorated-page">
        <Decor />
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге</p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <ContactItem />
            <Map place={DEFAULT_PLACE} list={[DEFAULT_PLACE]} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default Contacts;
