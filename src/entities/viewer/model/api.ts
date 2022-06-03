import { createEvent, createStore } from 'effector';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { authConfig } from '../../../shared';

export const auth0 = new Auth0Client(authConfig);

export const setUser = createEvent();
export const isAuth = createEvent();

export const $User = createStore(null).on(setUser, (state, user) => user);
export const $isAuth = createStore(null).on(isAuth, (state, res) => res);
