import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT } from './constants';
import { FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-toastify';
import { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

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

export const baseQuery = () => {
  const baseQueryFn = fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token && headers) {
        headers.set('x-token', ` ${token}`);
      }

      return headers;
    },
  });
  const baseQueryRes = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: object
  ) => {
    const { error, data } = await baseQueryFn(args, api, extraOptions);
    const typedError = error as {
      status?: number;
      data?: { message?: string };
    };
    if (error) {
      toast(typedError.data?.message || typedError.status || 'unknown error');
      return { error: { status: error.status, data: error.data } };
    }
    const typedData = data as { message?: string };
    if (typedData?.message) {
      toast.info(typedData?.message);
      delete typedData.message;
    }
    return { data };
  };
  return baseQueryRes as unknown as BaseQueryFn;
};
