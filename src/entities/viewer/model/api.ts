import { Auth0Client } from '@auth0/auth0-spa-js';
import { authConfig } from 'shared';
import { User } from './types';

const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
export const getUser = (): Promise<User> => auth0.getUser();
export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();
