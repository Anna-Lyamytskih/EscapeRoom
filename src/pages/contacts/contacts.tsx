import ContactItem from '../../components/contact-item/contact-item';
import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Path from '../../components/path/path';

const Contacts = () => (
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
            <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
              <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге</p>
              <h1 className="title title--size-m page-content__title">Контакты</h1>
            </div>
            <div className="contacts">
              <ContactItem />
              <Map />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  </>
);


export default Contacts;
