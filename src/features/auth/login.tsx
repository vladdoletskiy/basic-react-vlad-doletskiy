import React from 'react';
import { Button } from '../../shared/ui/elements';
import { auth0 } from './createClient';

export const LoginButton: React.FunctionComponent = () => {
  return (
    <Button onClick={() => auth0.loginWithRedirect()} color="inherit">
      Login
    </Button>
  );
};
