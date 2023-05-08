import { listNavigation } from '../../constants';
import NavigationItem from '../navigation-item/navigation-item';

const NavigationList = () => (
  <ul className="main-nav__list">
    {listNavigation.map((navigationName) => (<NavigationItem title={navigationName.title} value={navigationName.value} key={navigationName.title} />))}
  </ul>
);

export default NavigationList;
