import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { UserData } from './constants';
import { APIRoute } from '../../services/constants';
import { setUserData } from './user-process';
import { AppRoute } from '../../router/constants';
import { dropToken, saveToken } from '../../services/token';
import { LoginFormType } from '../../components/login-form/login-form';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({ payload: route })
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(data));
  },
);

export const loginAction = createAsyncThunk<void, LoginFormType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      if (data) {
        saveToken(data.token);
      }
      dispatch(setUserData(data));
    } catch (e) {
      console.log(e)
      throw e;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setUserData(null));
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
);
