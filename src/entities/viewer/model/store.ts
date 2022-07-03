import { sample, createEvent, createStore, createEffect } from 'effector';
import { guestUser } from 'shared';
import { setToken } from 'shared/api';
import { User } from './types';
import {
  getUser,
  login,
  logout,
  getAuthState,
  updateUser,
  deleteUser,
  getManagementToken,
} from './api';

export const loginRequested = createEvent();
export const logoutRequested = createEvent();
export const userChanged = createEvent<Partial<User>>();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getUserFx = createEffect(getUser);
export const getManagementTokenFx = createEffect(getManagementToken);
export const getAuthStateFx = createEffect(getAuthState);
export const updateUserFx = createEffect(updateUser);
export const deleteUserFx = createEffect(deleteUser);
const setTokenFx = createEffect(setToken);

export const $user = createStore<User>(guestUser)
  .on(getUserFx.doneData, (_, user) => user)
  .on(userChanged, (user, partial) => (user ? { ...user, ...partial } : user));
export const $isAuth = createStore<boolean>(false).on(getAuthStateFx.doneData, (_, res) => res);

sample({ clock: loginFx.doneData, target: getUserFx });
sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: loginFx.doneData, target: getAuthStateFx });
sample({ clock: loginFx.doneData, target: getManagementTokenFx });
sample({ clock: deleteUserFx.doneData, target: logoutFx });
sample({ clock: getManagementTokenFx.doneData, target: setTokenFx });
