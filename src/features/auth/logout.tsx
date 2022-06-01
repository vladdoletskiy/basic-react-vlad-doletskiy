import React from 'react';
import { Button } from '../../shared/ui/elements';
import { auth0 } from './createClient';

export const LogOutButton: React.FunctionComponent = () => {
  return (
    <Button onClick={() => auth0.logout()} color="inherit">
      LogOut
    </Button>
  );
};
