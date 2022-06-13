import { Auth0Client } from '@auth0/auth0-spa-js';
import { authConfig } from 'shared';
import { User } from './types';

const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
export const getUser = async (): Promise<User> => {
  const user = await auth0.getUser();
  if (!user?.nickname || !user?.name) throw new Error('Something went wrong..');
  return { name: user.name, nickname: user.nickname };
};
export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();
