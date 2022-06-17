import { Auth0Client } from '@auth0/auth0-spa-js';
import { apiConfig, authConfig } from 'shared';
import { User } from './types';
import axios from 'axios';

const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
export const getUser = async (): Promise<User> => {
  const user = await auth0.getUser();
  console.log(user);
  //   if (
  //     !user?.nickname ||
  //     !user?.name ||
  //     !user?.sub ||
  //     !user?.email ||
  //     !user?.picture ||
  //     !user?.given_name ||
  //     !user?.family_name
  //   )
  //     throw new Error('Something went wrong..');
  console.log(user);
  return {
    name: user.name,
    email: user.email,
    given_name: user.given_name,
    family_name: user.family_name,
    username: user.nickname,
    user_id: user.sub,
    picture: user.picture,
  };
};

export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();
export const accessToken = (): Promise<string | undefined> => auth0.getTokenSilently();

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
      authorization: `Bearer ${authConfig.tokenApi}`,
      'content-type': 'application/json',
    },
    data: body,
  });
};

export const updateUser = async (user: User): Promise<void> => {
  const connection = { connection: 'Username-Password-Authentication' };
  const { user_id, username, picture, ...partOfBody } = user;
  const body = Object.assign(partOfBody, connection);
  await buildReq({ resource: user.user_id, method: 'PATCH', body });
};

export const deleteUser = async (user: User): Promise<void> => {
  const { ...body } = user;
  await buildReq({ resource: user.user_id, method: 'DELETE', body });
};

// Отримання токену для роботи з API
export const getApiToken = async () => {
  return await axios(`https://dev-lp34u8l1.us.auth0.com/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(apiConfig),
  });
};
