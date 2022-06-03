import React from 'react';
import { Button } from '../../../shared/ui/elements';
import { logout } from '../model';

export const LogOutButton: React.FunctionComponent = () => {
  return (
    <Button onClick={logout} color="inherit">
      LogOut
    </Button>
  );
};
