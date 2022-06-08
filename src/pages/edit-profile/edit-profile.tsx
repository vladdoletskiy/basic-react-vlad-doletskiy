import React from 'react';
import { useStore } from 'effector-react';
import { Box, TextField, Container, Typography, Button, AddCircleOutlinedIcon } from 'shared';
import { viewerModel } from 'entities/viewer';

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
            <form>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 1,
                  mt: '10px',
                }}
              >
                <Typography variant="h4" color="initial">
                  Edit Profile
                </Typography>
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="BoD"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    mb: '7px',
                  }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
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
                  sx={{
                    mb: '7px',
                  }}
                  variant="contained"
                >
                  Send
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
