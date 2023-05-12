import { Link } from 'react-router-dom';
import { loginAction } from '../../store/user-process/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useForm } from 'react-hook-form';
import { useHistoryRedirect } from '../../hooks/use-history-redirect/use-history-redirect';
import { useEffect } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';

export type LoginFormType = {
  email: string;
  password: number;
}

const LoginForm = () => {
  const { restoreUrl } = useHistoryRedirect();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const { formState: { isLoading }, register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormType>({
    mode: 'onChange'
  });

  useEffect(() => {
    let isMounted = true;

    if (isMounted && authorizationStatus === AuthorizationStatus.Auth) {
      restoreUrl();
    }

    return () => {
      isMounted = false;
    };
  }, [authorizationStatus]);

  const onSubmit = handleSubmit((data) => {
    dispatch(loginAction(data));
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <form className="login-form" action="" method="" onSubmit={(evt: React.FormEvent<HTMLFormElement>) => void onSubmit(evt)}>
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input type="email" id="email" placeholder="Адрес электронной почты" defaultValue=''
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: /.+@.+\..+/i,
                  message: 'Пожалуйста введите допустимый формат электронной почты (forExample@mail.ru)'
                }
              })}
            />
            <div> {errors?.email && <p>{errors?.email?.message}</p>}</div>
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" placeholder="Пароль" defaultValue=''
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/g,
                  message: 'Ваш пароль должен состоять минимум из 1 буквы и 1 цифры, не менее 3 символов'
                }
              })}
            />
            <div> {errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={!isValid}>Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" defaultValue='' required />
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
};

export default LoginForm;
