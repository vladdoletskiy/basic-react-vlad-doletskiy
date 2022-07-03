import React from 'react';
import { useStore } from 'effector-react';
import { Box, Avatar, Container, Typography } from 'shared/ui/mui';
import { viewerModel } from 'entities/viewer';

export const ProfilePage: React.FC = () => {
  const user = useStore(viewerModel.$user);
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
              justifyContent: 'flex-end',
              flexDirection: 'column',
              width: 1,
              height: '500px',
              backgroundColor: 'primary.light',
              borderRadius: '33px',
              mt: '26px',
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
                srcSet={user.picture}
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
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="h6">Surname</Typography>
                  <Typography variant="h6">Name</Typography>
                </Box>

                <Box
                  sx={{
                    fontWeight: '500',
                  }}
                >
                  <Typography variant="h6" color="initial">
                    {user.email}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    {user.surname}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    {user.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
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
