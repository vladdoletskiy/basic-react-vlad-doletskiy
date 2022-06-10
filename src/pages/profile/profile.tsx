import React from 'react';
import { useStore } from 'effector-react';
import { Box, Avatar, Container, Typography } from 'shared';
import { viewerModel } from 'entities/viewer';

export const ProfilePage: React.FC = () => {
  const isAuth = useStore(viewerModel.$isAuth);
  const user = useStore(viewerModel.$user);
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
              justifyContent: 'flex-end',
              flexDirection: 'column',
              width: 1,
              height: '500px',
              backgroundColor: 'primary.light',
              borderRadius: '33px',
              mt: '130px',
              mb: '40px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: '50px',
              }}
            >
              <Avatar
                alt="Remy Sharp"
                srcSet="https://citaty.info/files/styles/poster/public/characters/8604.jpg?itok=_bemMaL1"
                sx={{
                  width: { sm: '250px', md: '270px', xs: '200px' },
                  height: { sm: '250px', md: '270px', xs: '200px' },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 1,
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" color="initial">
                {user.nickname}
              </Typography>
              <Typography variant="subtitle1" color="initial">
                Wizard
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '10px',
                  mb: '40px',
                  borderRadius: '33px',
                }}
              >
                <Box
                  sx={{
                    pr: '20px',
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      pt: '15px',
                    }}
                  >
                    City
                  </Typography>
                  <Typography variant="h6">Country</Typography>
                  <Typography variant="h6">DoB</Typography>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="h6">Phone</Typography>
                </Box>

                <Box
                  sx={{
                    fontWeight: '500',
                  }}
                >
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                      pt: '15px',
                    }}
                  >
                    London
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Great Britain
                  </Typography>
                  <Typography variant="h6" color="initial">
                    14.04.1999
                  </Typography>
                  <Typography variant="h6" color="initial">
                    {user.name}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    +380969124049
                  </Typography>
                </Box>
              </Box>
            </Box>
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
