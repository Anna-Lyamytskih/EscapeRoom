import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import NavigationList from '../navigation-list/navigation-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/user-process/api-actions';
import { AuthorizationStatus } from '../../constants';

const Header = () => {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleOutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="container container--size-l">
      <Logo />
      <nav className="main-nav header__main-nav">
        <NavigationList />
      </nav>
      <div className="header__side-nav">
        {authorizationStatus === AuthorizationStatus.Auth &&
          <Link className="btn btn--accent header__side-item" to="#" onClick={handleOutClick}>Выйти</Link>}
        {authorizationStatus === AuthorizationStatus.NoAuth &&
          <Link className="btn header__side-item header__login-btn" to="/login">Вход</Link>}
        <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
      </div>
    </div>
  );
};

export default Header;
