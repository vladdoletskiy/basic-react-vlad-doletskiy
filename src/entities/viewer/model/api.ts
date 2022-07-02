import { userManagementService, apiConfig, authConfig, authService } from 'shared/api';
import { User } from './types';

export const login = () => authService.loginWithPopup();
export const logout = () => authService.logout();
export const getUser = async (): Promise<User> => {
  const user = await authService.getUser();
  if (!user?.nickname || !user?.sub || !user?.email || !user.picture) {
    throw new Error('Something went wrong..');
  }

  return {
    email: user.email,
    surname: user?.given_name || '',
    name: user?.given_name || '',
    nickname: user.nickname,
    userId: user.sub,
    picture: user.picture,
  };
};

export const getAuthState = (): Promise<boolean> => authService.isAuthenticated();

export const updateUser = async (user: User): Promise<void> => {
  await userManagementService.patch(`/api/v2/users/${user.userId}`, {
    nickname: user.nickname,
    email: user.email,
    given_name: user.name,
    family_name: user.surname,
    connection: authConfig.connection,
  });
};

export const deleteUser = async (user: User): Promise<void> => {
  await userManagementService.delete(`/api/v2/users/${user.userId}`);
};

export const getManagementToken = async (): Promise<string> => {
  const res = await userManagementService.post('/oauth/token', apiConfig);
  const data = await res.data;
  return data.access_token;
};
