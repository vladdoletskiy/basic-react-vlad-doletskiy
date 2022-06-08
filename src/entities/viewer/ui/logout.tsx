import React from 'react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';

export const LogOutButton: React.FunctionComponent = () => {
  return (
    <Button onClick={() => viewerModel.logoutRequested()} color="inherit">
      LogOut
    </Button>
  );
};
