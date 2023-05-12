import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import Decor from '../../components/decor/decor';
import LoginForm from '../../components/login-form/login-form';
import { Helmet } from 'react-helmet-async';

const Login = () => (
  <>
    <Helmet>
      <title>Авторизация - Escape Room</title>
    </Helmet>
    <Path />
    <div className="wrapper">
      <Header />
      <main className="decorated-page login">
        <Decor />
        <div className="container container--size-l">
          <div className="login__form">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default Login;
