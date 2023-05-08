import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './constants';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import MyQuests from '../pages/my-quests/my-quests';
import NotFound from '../pages/not-found/not-found';
import Contacts from '../pages/contacts/contacts';
import Booking from '../pages/booking/booking';
import PrivateRoute from './private-route/private-route';
import { AuthorizationStatus } from '../constants';
import QuestPage from '../pages/quest-page/quest-page';
import { useAppSelector } from '../hooks';

const Router = () => {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Quest} element={<QuestPage />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.MyQuests} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyQuests />
            </PrivateRoute>
          } />
          <Route path={AppRoute.Booking} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Booking />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};


export default Router;

