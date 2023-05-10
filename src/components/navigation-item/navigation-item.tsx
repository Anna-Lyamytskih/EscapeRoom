import { Link, useLocation } from 'react-router-dom';
import { SortingTypesNavigation } from '../../constants';

type NavigationItemProps = {
  title: string;
  value: SortingTypesNavigation;
}

const NavigationItem = ({ title, value }: NavigationItemProps) => {
  const location = useLocation();

  return (
    <li className="main-nav__item">
      <Link className={location.pathname === value ? 'link active' : 'link'} to={value}>{title}</Link>
    </li >
  );
}
export default NavigationItem;

