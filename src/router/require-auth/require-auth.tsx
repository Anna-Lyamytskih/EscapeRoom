import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../constants';
import { AuthorizationStatus } from '../../constants';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function RequireAuth() {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const checkAuthIsLoading = useAppSelector((state) => state.USER.checkAuthIsLoading);

  if (checkAuthIsLoading) {
    return <LoadingScreen />;
  }

  if ((authorizationStatus !== AuthorizationStatus.Auth)) {
    return <Navigate to={AppRoute.Login} />;
  }

  return <Outlet />;
}

export default RequireAuth;
