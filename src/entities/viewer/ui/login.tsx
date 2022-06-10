import React from 'react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';
import { useStore } from 'effector-react';
import { $user } from '../model/store';

export const LoginButton: React.FunctionComponent = () => {
  const user = useStore($user);
  return (
    <>
      <Button onClick={() => viewerModel.loginRequested()} color="inherit">
        Login
      </Button>
      <Button onClick={() => console.log(user)} color="inherit">
        test token
      </Button>
    </>
  );
};
