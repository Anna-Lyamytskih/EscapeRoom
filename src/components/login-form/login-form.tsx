import { Link } from 'react-router-dom';

const LoginForm = () => (
  <form className="login-form" action="https://echo.htmlacademy.ru/" method="post">
    <div className="login-form__inner-wrapper">
      <h1 className="title title--size-s login-form__title">Вход</h1>
      <div className="login-form__inputs">
        <div className="custom-input login-form__input">
          <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
          <input type="email" id="email" name="email" placeholder="Адрес электронной почты" required />
        </div>
        <div className="custom-input login-form__input">
          <label className="custom-input__label" htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" placeholder="Пароль" required />
        </div>
      </div>
      <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
    </div>
    <label className="custom-checkbox login-form__checkbox">
      <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
      <span className="custom-checkbox__icon" >
        <svg width="20" height="17" aria-hidden="true">
          <use xlinkHref="#icon-tick"></use>
        </svg>
      </span>
      <span className="custom-checkbox__label">
        Я&nbsp;согласен с
        <Link className="link link--active-silver link--underlined" to="#">
          правилами обработки персональных данных
        </Link>
        &nbsp;и пользовательским соглашением
      </span>
    </label>
  </form>
);

export default LoginForm;
