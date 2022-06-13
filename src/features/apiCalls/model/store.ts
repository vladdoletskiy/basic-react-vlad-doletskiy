import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import axios, { AxiosRequestConfig } from 'axios';
import { authConfig } from 'shared';
import { viewerModel } from 'entities/viewer';
import { User } from './types';

export const getUserRequested = createEvent();
// export const updateUserFx = createEffect((params) => {
//   console.log(params);
// });

export const submittedForm = createEvent<React.FormEvent<HTMLFormElement>>();
export const setFieldForm = createEvent();

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
submittedForm.watch((e) => {
  e.preventDefault();
});

export const $updateUserInfo = createStore<User | null | object>({}).on(
  setFieldForm,
  (s, { key, value }: any) => ({
    ...s,
    [key]: value,
  }),
);
export const updateUserFx = attach({
  source: $updateUserInfo,
  async effect(updateUserInfo, text: any) {
    console.log('updateinfo: ', updateUserInfo);
    return backendRequestFx({ resource: `auth0|62927cc87a0f2c00687f5abc}`, method: 'PATCH' });
  },
});
export const getUserInfoFx = attach({
  source: viewerModel.$user,
  async effect(user, text: any) {
    console.log('user: ', user);
    return backendRequestFx({ resource: `${user?.sub}`, method: 'GET' });
  },
});

export const $userInfo = createStore<User | null>(null).on(
  getUserInfoFx.doneData,
  (_, response) => response.data,
);

sample({ clock: viewerModel.$user, target: getUserInfoFx });
sample({
  clock: submittedForm,
  source: $updateUserInfo,
  target: updateUserFx,
});
