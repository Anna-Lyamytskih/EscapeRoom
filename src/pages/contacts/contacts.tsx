import ContactItem from '../../components/contact-item/contact-item';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';
import { MapPlace } from '../../types/map';

export const DEFAULT_PLACE: MapPlace = {
  id: 'id',
  location: {
    address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
    coords: [59.968322, 30.317359],
  },
};

const Contacts = () => (
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

//TODO нужно разобраться с картой, д.б. статична, отдельную создать для этого компонента?
export default Contacts;
