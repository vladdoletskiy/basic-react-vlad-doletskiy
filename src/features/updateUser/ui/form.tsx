import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'effector-react';
import { Box, TextField, Typography, Button, EditIcon } from 'shared';
import { viewerModel } from 'entities/viewer';
import { User } from 'entities/viewer/model/types';
import { updateUserModel } from 'features/updateUser';

export const UpdateUserForm: React.FunctionComponent = () => {
  const user = useStore(viewerModel.$user);
  const navigate = useNavigate();
  if (!user) throw new Error('Something went wrong..');
  const userProfileFilds: { lable: string; key: keyof User }[] = [
    { lable: 'Nickname', key: 'nickname' },
    { lable: 'E-mail', key: 'email' },
    { lable: 'Surname', key: 'surname' },
    { lable: 'Name', key: 'name' },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
        {userProfileFilds.map((item, index) => (
          <TextField
            key={index}
            sx={{ mb: '7px' }}
            label={item.key[0].toUpperCase() + item.key.slice(1)}
            variant="outlined"
            value={user[item.key]}
            onChange={(e) => viewerModel.userChanged({ [item.key]: e.target.value })}
          />
        ))}
        <Box>
          {' '}
          <Button
            sx={{ mb: '5px', width: '100px', position: 'relative', right: '52px' }}
            type="submit"
            variant="contained"
          >
            <EditIcon />
          </Button>
        </Box>
      </Box>
    </form>
  );
};
