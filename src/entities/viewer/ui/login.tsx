import React from 'react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';
// import { useStore } from 'effector-react';
// import { $user } from '../model/store';
import { getUserRequested } from '../../../features/apiCalls/model/store';

export const LoginButton: React.FunctionComponent = () => {
  //   getPostsFx({ text: 'hello' });
  //   const user = useStore($user);
  return (
    <>
      <Button onClick={() => viewerModel.loginRequested()} color="inherit">
        Login
      </Button>
      <Button onClick={() => getUserRequested()} color="inherit">
        test token
      </Button>
    </>
  );
};
