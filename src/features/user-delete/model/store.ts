import { sample, createEvent } from 'effector';
import { viewerModel } from 'entities/viewer';

export const userDeletetion = createEvent();

sample({
  clock: userDeletetion,
  source: viewerModel.$user,
  target: viewerModel.deleteUserFx,
});
