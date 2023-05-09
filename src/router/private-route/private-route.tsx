import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';
import { AppRoute } from '../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactNode;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
