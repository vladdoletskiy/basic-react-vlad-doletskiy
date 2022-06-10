import React from 'react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';

export const LoginButton: React.FunctionComponent = () => {
  return (
    <Button onClick={() => viewerModel.loginRequested()} color="inherit">
      Login
    </Button>
  );
};
