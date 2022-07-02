import axios from 'axios';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { authConfig, apiConfig } from './configs';

export const authService = new Auth0Client(authConfig);

export const userManagementService = axios.create({ baseURL: `${authConfig.domain}` });

userManagementService.interceptors.request.use(
  ({ ...config }) => {
    const accessToken = authConfig.accessToken;
    if (!accessToken) return config;

    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        authorization: accessToken,
      },
    };
  },
  (err) => {
    console.log('err: ', err);
  },
);

export const getToken = async (): Promise<string> => {
  const res = await userManagementService.post('/oauth/token', JSON.stringify(apiConfig));
  const data = await res.data;
  return data.access_token;
};
