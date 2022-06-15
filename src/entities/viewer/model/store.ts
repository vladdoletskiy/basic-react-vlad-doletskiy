import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import { User } from './types';
import { getUser, login, logout, getAuthState, accessToken, updateUser, getApiToken } from './api';

export const loginRequested = createEvent();
export const logoutRequested = createEvent();
export const userChanged = createEvent<Partial<User>>();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getUserFx = createEffect(getUser);
export const getTokenFx = createEffect(accessToken);
export const getApiTokenFx = createEffect(getApiToken);
export const getAuthStateFx = createEffect(getAuthState);
export const updateUserFx = createEffect(updateUser);

export const $user = createStore<User | null>(null)
  .on(getUserFx.doneData, (_, user) => user)
  .on(userChanged, (user, partial) => (user ? { ...user, ...partial } : user));
export const $isAuth = createStore<boolean>(false).on(getAuthStateFx.doneData, (_, res) => res);
export const $token = createStore<string | null>(null).on(getTokenFx.doneData, (_, token) => token);
export const $apiToken = createStore<string | null>(null).on(
  getApiTokenFx.doneData,
  (_, token) => token,
);

getApiTokenFx.doneData.watch((response) => console.log('Effect is done with', response));
getApiTokenFx.failData.watch((error) => console.warn('Effect is failed with', error));

sample({ clock: loginFx.doneData, target: getUserFx });
sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: loginFx.doneData, target: getAuthStateFx });
sample({ clock: loginFx.doneData, target: getTokenFx });
sample({ clock: loginFx.doneData, target: getApiTokenFx });
