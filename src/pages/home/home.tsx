import React from 'react';
import { Box, Container, Typography } from 'shared/ui/mui';

export const HomePage: React.FC = () => {
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
        <Typography variant="h4" color="initial">
          Welcome to my App
        </Typography>
      </Box>
    </Container>
  );
};
