import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT } from './constants';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_URL,
  prepareHeaders: (headers) => {
    const token = getToken();
    console.log(token, getToken())
    if (token && headers) {
      headers.set('x-token', ` ${token}`);
    }

    return headers;
  },
});
