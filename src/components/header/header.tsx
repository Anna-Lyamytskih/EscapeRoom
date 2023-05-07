import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import NavigationList from '../navigation-list/navigation-list';

const Header = () => (
  <div className="container container--size-l">
    <Logo />
    <nav className="main-nav header__main-nav">
      <NavigationList />
    </nav>
    <div className="header__side-nav">
      <Link className="btn btn--accent header__side-item" to="#">Выйти</Link>
      <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
    </div>
  </div>
);

export default Header;
