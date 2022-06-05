import { sample, createEvent, createStore, createEffect } from 'effector';
import { User } from './types';
import { getUser, login, logout, getAuthState } from './api';

export const loginRequested = createEvent();
export const logoutRequested = createEvent();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getUserFx = createEffect(getUser);
export const getAuthStateFx = createEffect(getAuthState);

export const $user = createStore<User | null>(null).on(getUserFx.doneData, (_, user) => user);
export const $isAuth = createStore(false).on(getAuthStateFx.doneData, (_, res) => res);

sample({ clock: loginFx.doneData, target: getUserFx });
sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: loginFx.doneData, target: getAuthStateFx });
