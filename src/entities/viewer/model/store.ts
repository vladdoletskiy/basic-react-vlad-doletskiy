import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import { User } from './types';
import { getUser, login, logout, getAuthState, accessToken } from './api';

export const loginRequested = createEvent();
export const logoutRequested = createEvent();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getUserFx = createEffect(getUser);
export const getTokenFx = createEffect(accessToken);
export const getAuthStateFx = createEffect(getAuthState);

export const $user = createStore<User | null>(null).on(getUserFx.doneData, (_, user) => user);
export const $isAuth = createStore<boolean>(false).on(getAuthStateFx.doneData, (_, res) => res);
export const $token = createStore<string | null>(null).on(getTokenFx.doneData, (_, token) => token);

sample({ clock: loginFx.doneData, target: getUserFx });
sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: loginFx.doneData, target: getAuthStateFx });
sample({ clock: loginFx.doneData, target: getTokenFx });
