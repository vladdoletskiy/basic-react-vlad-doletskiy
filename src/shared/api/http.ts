import { authConfig } from './configs';

export const setToken = (token: string): void => {
  const accessToken = `Bearer ${token}`;
  authConfig.accessToken = accessToken;
};
