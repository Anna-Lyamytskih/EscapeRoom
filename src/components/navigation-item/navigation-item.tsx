import { Link } from 'react-router-dom';
import { SortingTypesNavigation } from '../../constants';

type NavigationItemProps = {
  title: string;
  value: SortingTypesNavigation;
}
//TODO при нажатии на одну из кнопок фильтра, нужно ставить класс 'link active'
const NavigationItem = ({ title, value }: NavigationItemProps) => (
  <li className="main-nav__item">
    <Link className="link" to={value}>{title}</Link>
  </li>
);

export default NavigationItem;
