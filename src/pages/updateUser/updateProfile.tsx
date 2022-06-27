import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'effector-react';
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  AddCircleOutlinedIcon,
  EditIcon,
} from 'shared';
import { viewerModel } from 'entities/viewer';
import { User } from 'entities/viewer/model/types';
import { updateUserModel } from 'features/updateUser';
import { DeleteUser } from 'features/deleteUser/ui';

export const UpdateUserForm: React.FunctionComponent = () => {
  const user = useStore(viewerModel.$user);
  const navigate = useNavigate();

  const userProfileFilds: { lable: string; key: keyof User }[] = [
    { lable: 'Nickname', key: 'nickname' },
    { lable: 'E-mail', key: 'email' },
    { lable: 'Surname', key: 'surname' },
    { lable: 'Name', key: 'name' },
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          height: 'calc(100vh - 65px)',
        }}
      >
        {user ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: 1,
              height: '550px',
              backgroundColor: 'primary.light',
              borderRadius: '33px',
            }}
          >
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
                <Button sx={{ mb: '7px' }} variant="contained" component="label" color="primary">
                  {' '}
                  <AddCircleOutlinedIcon /> Upload a file
                  <input type="file" hidden />
                </Button>
                <Box>
                  {' '}
                  <Button sx={{ mr: '17px' }} type="submit" variant="contained">
                    <EditIcon />
                  </Button>
                  <DeleteUser />
                </Box>
              </Box>
            </form>
          </Box>
        ) : (
          <Typography variant="h6" color="initial">
            Please log in
          </Typography>
        )}
      </Box>
    </Container>
  );
};
