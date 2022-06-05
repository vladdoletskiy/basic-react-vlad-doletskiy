import { Auth0Client } from '@auth0/auth0-spa-js';
import { authConfig } from 'shared';
import { User } from './types';
export const auth0 = new Auth0Client(authConfig);

export const login = () => auth0.loginWithPopup();
export const logout = () => auth0.logout();
// export const getUser = async (): Promise<User> => {
//   const resUser = await auth0.getUser();
//   console.log(resUser);
//   if (!resUser?.given_name || !resUser?.family_name) throw new Error('Failed to get User');
//   return {
//     firstName: resUser.given_name,
//     lastName: resUser.family_name,
//   };
// };
export const getUser = (): Promise<User | undefined> => auth0.getUser();
export const getAuthState = (): Promise<boolean> => auth0.isAuthenticated();
