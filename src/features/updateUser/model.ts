import { sample, createEvent, createStore, createEffect, attach } from 'effector';
import axios, { AxiosRequestConfig } from 'axios';
import { authConfig } from 'shared';
import { viewerModel } from 'entities/viewer';

export const userEdited = createEvent();



sample({
  clock: userEdited,
  source: viewerModel.$user,
  fn: (user) => {
    if (!user) throw new Error();
    return user;
  },
  target: viewerModel.updaterUserFx,
});