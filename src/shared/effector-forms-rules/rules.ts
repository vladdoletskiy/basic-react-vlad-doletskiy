import { Rule } from 'effector-forms';

export const rules = {
  required: (): Rule<string> => ({
    name: 'required',
    validator: (value) => ({
      isValid: Boolean(value),
      errorText: 'Required field',
    }),
  }),
  email: (): Rule<string> => ({
    name: 'email',
    validator: (value) => ({
      isValid: /\S+@\S+\.\S+/.test(value),
      errorText: 'you must enter a valid email address',
    }),
  }),
  minLength: (min: number): Rule<string> => ({
    name: 'minLength',
    validator: (value) => ({
      isValid: value.length >= min,
      errorText: 'too short a word',
    }),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: 'maxLength',
    validator: (value) => ({
      isValid: value.length <= max,
      errorText: 'a word too long',
    }),
  }),
};
