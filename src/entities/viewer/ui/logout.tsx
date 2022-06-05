import React from 'react';
import { Button } from 'shared/ui/elements';
import { viewerModel } from '../index';

export const LogOutButton: React.FunctionComponent = () => {
  return (
    <Button onClick={() => viewerModel.logoutRequested()} color="inherit">
      LogOut
    </Button>
  );
};
