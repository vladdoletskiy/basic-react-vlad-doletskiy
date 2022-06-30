import { sample, createEvent, createEffect, forward } from 'effector';
import { createForm } from 'effector-forms';
import { rules } from 'shared';
import { viewerModel } from 'entities/viewer';

export const validateFx = createEffect();

export const userUpdateRequested = createEvent();

export const updateUserForm = createForm({
  fields: {
    email: {
      init: '' as string,
      rules: [rules.email()],
      validateOn: ['change'],
    },
    name: {
      init: '' as string,
      rules: [rules.minLength(3)],
      validateOn: ['change'],
    },
    surname: {
      init: '' as string,
      rules: [rules.minLength(3)],
      validateOn: ['change'],
    },
    nickname: {
      init: '' as string,
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

// Can't insert value from store to inputs.
forward({
  from: viewerModel.getUserFx.doneData,
  to: updateUserForm.setForm,
});
