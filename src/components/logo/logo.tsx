import { Link } from 'react-router-dom';

const Logo = () => (
  <span className="logo header__logo">
    <Link className="logo header__logo" to="index.html" aria-label="Перейти на Главную"> </Link>
    <svg width="134" height="52" aria-hidden="true">
      <use xlinkHref="#logo"></use>
    </svg>
  </span>
);


export default Logo;
