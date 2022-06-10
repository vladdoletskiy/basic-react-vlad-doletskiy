import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import axios from 'axios';
import { $user } from 'entities/viewer/model/store';
import { authConfig } from 'shared';

const backendRequestFx = createEffect(async ({ resource, method }: any) => {
  return axios(`https://jsonplaceholder.typicode.com${resource}`, {
    method: method,
    headers: {
      'content-type': 'application/json',
    },
  });
});

backendRequestFx.doneData.watch((response) => console.log('Effect is done with', response.data));
backendRequestFx.failData.watch((error) => console.warn('Effect is failed with', error));

const requestFx = attach({
  effect: backendRequestFx,
  source: $user,
  mapParams: ({ method, resource }: { method: string; resource: string }, user) => ({
    method,
    resource,
    user,
  }),
});

export const getPostsFx = attach({
  source: $user,
  async effect(_, user) {
    return requestFx({ resource: `/posts/${user.id}`, method: 'GET' });
  },
});
