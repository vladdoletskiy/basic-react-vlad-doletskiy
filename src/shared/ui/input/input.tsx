// import React from 'react';
// import { useStoreMap } from 'effector-react';
// import { TextField, Box } from 'shared';
// import { Field } from './types';

// export const MyTextField: React.FunctionComponent<Field> = ({ name, type, label, id, sx }) => {
//   const handleChange = featureModel.setFieldForm.prepend(
//     (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => ({
//       key: e.currentTarget.name,
//       value: e.currentTarget.value,
//     }),
//   );

//   const value = useStoreMap({
//     store: featureModel.$updateUserInfo,
//     keys: [name],
//     fn: (values, [name]) => values[name] || '',
//   });
//   return (
//     <TextField
//       name={name}
//       type={type}
//       value={value}
//       onChange={handleChange}
//       id={id}
//       label={label}
//       sx={sx}
//     />
//   );
// };
