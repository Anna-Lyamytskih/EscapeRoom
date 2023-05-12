import { Link } from 'react-router-dom';

const Logo = () => (
  <span className="logo header__logo">
    <Link className="logo header__logo" to="/" aria-label="Перейти на Главную">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  </span>
);

export default Logo;
