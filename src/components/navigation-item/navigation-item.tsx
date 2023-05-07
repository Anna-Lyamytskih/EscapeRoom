import { Link } from 'react-router-dom';

const NavigationItem = () => (
  <li className="main-nav__item">
    <Link className="link active" to="index.html">Квесты</Link>
  </li>
);

export default NavigationItem;
