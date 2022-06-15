import { sample, createEvent } from 'effector';
import { viewerModel } from 'entities/viewer';

export const userDeleted = createEvent();

sample({
  clock: userDeleted,
  source: viewerModel.$user,
  fn: (user) => {
    if (!user) throw new Error('Failed to delete User');
    return user;
  },
  target: viewerModel.deleteUserFx,
});
