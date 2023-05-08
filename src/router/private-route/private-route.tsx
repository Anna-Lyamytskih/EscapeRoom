import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';
import { AppRoute } from '../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
