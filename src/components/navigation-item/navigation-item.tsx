import { Link } from 'react-router-dom';
import { SortingTypesNavigation } from '../../constants';

type NavigationItemProps = {
  title: string;
  value: SortingTypesNavigation;
}

const NavigationItem = ({ title, value }: NavigationItemProps) => (
  <li className="main-nav__item">
    <Link className="link active" to={value}>{title}</Link>
  </li>
);

export default NavigationItem;
