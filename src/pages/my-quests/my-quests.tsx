import Decor from '../../components/decor/decor';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import QuestCard from '../../components/quest-card/quest-card';

const MyQuests = () => (
  
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
              <QuestCard page={'page'} quest={quest} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  </>
);

export default MyQuests;
