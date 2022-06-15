import React from 'react';
import { useStore } from 'effector-react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';

export const LoginButton: React.FunctionComponent = () => {
  //   const user = useStore(viewerModel.$user);
  //   const token = useStore(viewerModel.$apiToken);
  //   const token1 = useStore(viewerModel.$token);
  return (
    <>
      <Button onClick={() => viewerModel.loginRequested()} color="inherit">
        Login
      </Button>
      {/* <Button onClick={() => console.log(user)} color="inherit">
        USER
      </Button>
      <Button onClick={() => console.log(token)} color="inherit">
        TOKEN
      </Button> */}
    </>
  );
};
