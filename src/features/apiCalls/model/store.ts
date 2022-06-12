import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import axios from 'axios';
import { $user, getUserFx } from 'entities/viewer/model/store';
import { authConfig } from 'shared';

export const getUserRequested = createEvent();

const backendRequestFx = createEffect(
  async ({ resource, method }: { resource: string; method: string }) => {
    return axios(`https://dev-lp34u8l1.us.auth0.com/api/v2/users/${resource}`, {
      method: method,
      headers: {
        authorization: `Bearer ${authConfig.tokenApi}`,
        'content-type': 'application/json',
      },
    });
  },
);

backendRequestFx.doneData.watch((response) => console.log('Effect is done with', response.data));
backendRequestFx.failData.watch((error) => console.warn('Effect is failed with', error));

export const getPostsFx = attach({
  source: $user,
  async effect(user, text: any) {
    // console.log(user?.sub);
    return backendRequestFx({ resource: `${user?.sub}`, method: 'GET' });
  },
});
sample({ clock: getUserRequested, target: getPostsFx });

