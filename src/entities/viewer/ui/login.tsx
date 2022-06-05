import React from 'react';
import { Button } from '../../../shared/ui/elements';
import { viewerModel } from '../index';

export const LoginButton: React.FunctionComponent = () => {
  return (
    <>
      <Button onClick={() => viewerModel.loginRequested()} color="inherit">
        Login
      </Button>
    </>
  );
};
