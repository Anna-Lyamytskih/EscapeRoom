import { AuthorizationStatus } from '../../constants';

export type UserData = {
  email: string;
  token: string;
} | null;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};
