import { Auth0Client } from '@auth0/auth0-spa-js';
import axios from 'axios';
import { apiConfig, authConfig } from 'shared';
import { User } from './types';

const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
export const getUser = async (): Promise<User> => {
  const user = await auth0.getUser();
  if (!user?.nickname || !user?.sub || !user?.email || !user.picture)
    throw new Error('Something went wrong..');

  return {
    email: user.email,
    surname: user?.given_name || ' ',
    name: user?.given_name || ' ',
    nickname: user.nickname,
    user_id: user.sub,
    picture: user.picture,
  };
};

export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();

export const buildReq = async ({
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
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
    data: body,
  });
};

export const updateUser = async (user: User): Promise<void> => {
  await buildReq({
    resource: user.user_id,
    method: 'PATCH',
    body: {
      nickname: user.nickname,
      email: user.email,
      given_name: user.name,
      family_name: user.surname,
      connection: authConfig.connection,
    },
  });
};

export const deleteUser = async (user: User): Promise<void> => {
  const { ...body } = user;
  await buildReq({ resource: user.user_id, method: 'DELETE', body });
};

export const getManagementToken = async () => {
  return await axios(`https://dev-lp34u8l1.us.auth0.com/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(apiConfig),
  });
};
