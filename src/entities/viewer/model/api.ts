import { Auth0Client } from '@auth0/auth0-spa-js';
import axios from 'axios';
import { authConfig } from 'shared';
import { User } from './types';

const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
export const getUser = (): Promise<User> => auth0.getUser();
export const accessToken = (): Promise<string | undefined> => auth0.getTokenSilently();
export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();

const buildReq = async ({
  resource,
  method,
  body,
}: {
  resource: string;
  method: string;
  body: unknown;
}): Promise<void> => {
  await axios(`https://dev-lp34u8l1.us.auth0.com/api/v2/users/${resource}`, {
    method: method,
    headers: {
      authorization: `Bearer ${authConfig.tokenApi}`,
      'content-type': 'application/json',
    },
    data: body,
  });
};

export const updateUser = async (user: User): Promise<void> => {
  await buildReq({ resource: '', method: 'PATCH', body: user });
};

export const deleteUser = () => {}