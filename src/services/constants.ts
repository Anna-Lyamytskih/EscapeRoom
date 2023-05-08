export const AUTH_TOKEN_KEY_NAME = 'escape-room-token';

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
  MyQuests = '/reservation',
  Booking = '/booking'
}

export type AuthData = {
  email: string;
  password: string;
};

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';

export const REQUEST_TIMEOUT = 5000;
