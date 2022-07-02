import { sample, createEvent, createEffect, forward } from 'effector';
import { createForm } from 'effector-forms';
import { rules } from 'shared';
import { viewerModel } from 'entities/viewer';

export const validateFx = createEffect();

export const userUpdateRequested = createEvent();

export const updateUserForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [rules.email()],
      validateOn: ['change'],
    },
    name: {
      init: '',
      rules: [rules.minLength(3)],
      validateOn: ['change'],
    },
    surname: {
      init: '',
      rules: [rules.minLength(3)],
      validateOn: ['change'],
    },
    nickname: {
      init: '',
      rules: [rules.minLength(3)],
      validateOn: ['change'],
    },
  },
  validateOn: ['submit'],
});

forward({
  from: updateUserForm.formValidated,
  to: validateFx,
});

sample({
  clock: userUpdateRequested,
  source: updateUserForm.$values,
  target: viewerModel.userChanged,
});

sample({
  clock: viewerModel.userChanged,
  source: viewerModel.$user,
  fn: (user) => {
    if (!user) throw new Error('Failed to save User');
    return user;
  },
  target: viewerModel.updateUserFx,
});

sample({
  clock: viewerModel.getUserFx.doneData,
  fn: (user) => {
    return user;
  },
  target: updateUserForm.setForm,
});
