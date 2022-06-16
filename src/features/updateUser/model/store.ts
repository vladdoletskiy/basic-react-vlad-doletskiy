import { sample, createEvent } from 'effector';
import { viewerModel } from 'entities/viewer';
import { User } from 'entities/viewer/model/types';

export const userUpdateRequested = createEvent();
export const userEdited = createEvent<Partial<User>>();

sample({
  clock: userUpdateRequested,
  source: viewerModel.$user,
  fn: (user) => {
    if (!user) throw new Error('Failed to save User');
    return user;
  },
  target: viewerModel.updateUserFx,
});
