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
import { updateUserModel } from 'features/updateUser';
import { DeleteUser } from 'features/deleteUser/ui';

export const UpdateUserForm: React.FunctionComponent = () => {
  const user = useStore(viewerModel.$user);
  console.log(user);
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          height: 'calc(100vh - 65.3px)',
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
                <TextField
                  sx={{ mb: '7px' }}
                  label="Nickname"
                  variant="outlined"
                  name="nickname"
                  value={user.name}
                  onChange={(e) => viewerModel.userChanged({ name: e.target.value })}
                />
                <TextField
                  sx={{ mb: '7px' }}
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  value={user.email}
                  onChange={(e) => viewerModel.userChanged({ email: e.target.value })}
                />
                <TextField
                  sx={{ mb: '7px' }}
                  id="outlined-basic"
                  label="Surname"
                  variant="outlined"
                  name="familyName"
                  value={user.family_name}
                  onChange={(e) => viewerModel.userChanged({ family_name: e.target.value })}
                />
                <TextField
                  sx={{ mb: '7px' }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="givenName"
                  value={user.given_name}
                  onChange={(e) => viewerModel.userChanged({ given_name: e.target.value })}
                />
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
