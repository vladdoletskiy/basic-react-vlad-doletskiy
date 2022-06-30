import React from 'react';
import { useStore } from 'effector-react';
import { Box, Container, Typography } from 'shared/ui/mui';
import { viewerModel } from 'entities/viewer';
import { UpdateUserForm } from 'features/user-update';
import { DeleteUser } from 'features/user-delete';

export const UpdateUserPage: React.FunctionComponent = () => {
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
          height: 'calc(100vh - 65px)',
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
            <UpdateUserForm />
            <Box
              sx={{ width: '100px', position: 'relative', left: '50px', bottom: '41px', ml: '5px' }}
            >
              <DeleteUser />
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
