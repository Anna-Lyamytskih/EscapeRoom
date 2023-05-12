import { AuthorizationStatus, listAuthNavigation, listNoAuthNavigation } from '../../constants';
import { useAppSelector } from '../../hooks';
import NavigationItem from '../navigation-item/navigation-item';

const NavigationList = () => {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      <ul className="main-nav__list">{listAuthNavigation.map((navigationName) => (<NavigationItem title={navigationName.title} value={navigationName.value} key={navigationName.title} />))}</ul> :
      <ul className="main-nav__list">{listNoAuthNavigation.map((navigationName) => (<NavigationItem title={navigationName.title} value={navigationName.value} key={navigationName.title} />))}</ul>);
};

export default NavigationList;
