import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import Header from '../../components/header/header';
import Path from '../../components/path/path';
import Decor from '../../components/decor/decor';
import LoginForm from '../../components/login-form/login-form';

const Login = () => (
  <>
    <Title />
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
