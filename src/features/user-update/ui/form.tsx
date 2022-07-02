import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { Box, TextField, Typography, Button, EditIcon } from 'shared/ui/mui';
import { updateUserModel } from 'features/user-update';
import { updateUserForm } from '../model/user-update';

export const UpdateUserForm: React.FC = () => {
  const { fields, submit, eachValid } = useForm(updateUserForm);
  const navigate = useNavigate();
  const validate = useStore(updateUserModel.validateFx.pending);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
        updateUserModel.userUpdateRequested();
        navigate('/profile');
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
        <TextField
          sx={{ mb: '7px' }}
          label="Nickname"
          variant="outlined"
          value={fields.nickname.value}
          onChange={(e) => fields.nickname.onChange(e.target.value)}
        />
        <Box>
          {fields.nickname.errorText({
            nickname: 'you must enter a nickname',
          })}
        </Box>
        <TextField
          sx={{ mb: '7px' }}
          label="E-mail"
          variant="outlined"
          value={fields.email.value}
          onChange={(e) => fields.email.onChange(e.target.value)}
        />
        <Box>
          {fields.email.errorText({
            email: 'you must enter a valid email address',
          })}
        </Box>
        <TextField
          sx={{ mb: '7px' }}
          label="Surname"
          variant="outlined"
          value={fields.surname.value}
          onChange={(e) => fields.surname.onChange(e.target.value)}
        />
        <Box>
          {fields.surname.errorText({
            surname: 'you must enter the surname',
          })}
        </Box>
        <TextField
          sx={{ mb: '7px' }}
          label="Name"
          variant="outlined"
          value={fields.name.value}
          onChange={(e) => fields.name.onChange(e.target.value)}
        />
        <Box>
          {fields.name.errorText({
            name: 'you must enter the name',
          })}
        </Box>
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
