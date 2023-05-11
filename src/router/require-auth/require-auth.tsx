import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../constants';
import { AuthorizationStatus } from '../../constants';

function RequireAuth() {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const checkAuthIsLoading = useAppSelector((state) => state.USER.checkAuthIsLoading);

  if (checkAuthIsLoading) {
    return <>Loading....</>;
  }

  if ((authorizationStatus !== AuthorizationStatus.Auth)) {
    return <Navigate to={AppRoute.Login} />;
  }

  return <Outlet />;
}

export default RequireAuth;
