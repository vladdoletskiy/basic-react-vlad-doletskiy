import React from 'react';
import { Button } from '../../../shared/ui/elements';
import { login } from '../model';

export const LoginButton: React.FunctionComponent = () => {
  return (
    <>
      <Button onClick={login} color="inherit">
        Login
      </Button>
    </>
  );
};
