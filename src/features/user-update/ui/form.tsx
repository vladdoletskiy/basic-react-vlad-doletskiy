import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectedField, useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { toProfile } from 'shared';
import { Box, TextField, Typography, Button, EditIcon } from 'shared/ui/mui';
import { updateUserModel } from 'features/user-update';

export const UpdateUserForm: React.FC = () => {
  const { fields, submit, eachValid } = useForm(updateUserModel.updateUserForm);
  const navigate = useNavigate();
  const validate = useStore(updateUserModel.validateFx.pending);

  const userProfileFilds: { lable: string; key: ConnectedField<string> }[] = [
    { lable: 'Nickname', key: fields.nickname },
    { lable: 'E-mail', key: fields.email },
    { lable: 'Surname', key: fields.surname },
    { lable: 'Name', key: fields.name },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
        updateUserModel.userUpdateRequested();
        navigate(toProfile);
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: 1,
          mt: '60px',
        }}
      >
        <Typography variant="h4" color="initial">
          Edit Profile
        </Typography>
        {userProfileFilds.map((item, index) => (
          <Box key={index}>
            <TextField
              sx={{ mb: '4px', mt: '5px' }}
              label={item.lable}
              variant="outlined"
              className={item.key.hasError() ? 'invalid' : ''}
              value={item.key.value}
              onChange={(e) => item.key.onChange(e.target.value)}
            />
            <Box sx={{ color: 'error.main' }}>{item.key.errorText()}</Box>
          </Box>
        ))}
        <Box>
          {' '}
          <Button
            sx={{ mb: '5px', width: '100px', position: 'relative', right: '52px' }}
            type="submit"
            disabled={!eachValid || validate}
            variant="contained"
          >
            <EditIcon />
          </Button>
        </Box>
      </Box>
    </form>
  );
};
