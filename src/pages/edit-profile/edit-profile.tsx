import React from 'react';
import { useStore } from 'effector-react';
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  AddCircleOutlinedIcon,
  MyTextField,
} from 'shared';
import { viewerModel } from 'entities/viewer';
import { featureModel } from 'features/apiCalls';

export const EditProfilePage: React.FunctionComponent = () => {
  const isAuth = useStore(viewerModel.$isAuth);
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
        {isAuth ? (
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
            <form onSubmit={featureModel.submittedForm}>
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
                <MyTextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <MyTextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                />
                <MyTextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  name="phone_number"
                />
                {/* <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  name="phone_number"
                /> */}
                <Button
                  sx={{
                    mb: '7px',
                  }}
                  variant="contained"
                  component="label"
                  color="primary"
                >
                  {' '}
                  <AddCircleOutlinedIcon /> Upload a file
                  <input type="file" hidden />
                </Button>
                <Button
                  type="submit"
                  sx={{
                    mb: '7px',
                  }}
                  variant="contained"
                >
                  Edit
                </Button>
              </Box>
            </form>
          </Box>
        ) : (
          <Typography variant="h6" color="initial">
            User not find
          </Typography>
        )}
      </Box>
    </Container>
  );
};
