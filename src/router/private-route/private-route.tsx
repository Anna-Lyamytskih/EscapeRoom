import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';
import { AppRoute } from '../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  checkAuthIsLoading: boolean;
  children: React.ReactNode;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { authorizationStatus, checkAuthIsLoading, children } = props;

  if (checkAuthIsLoading) {
    return (<>Loading....</>);
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
