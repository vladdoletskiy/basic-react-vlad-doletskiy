import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'effector-react';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';

export const LoginButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  //   const user = useStore(viewerModel.$user);
  //   const token = useStore(viewerModel.$apiToken);
  //   const token1 = useStore(viewerModel.$token);
  return (
    <Button
      onClick={() => {
        viewerModel.loginRequested();
        navigate('/profile');
      }}
      color="inherit"
    >
      Login
    </Button>
  );
};
{
  /* <Button onClick={() => console.log(user)} color="inherit">
        USER
      </Button>
      <Button onClick={() => console.log(token)} color="inherit">
        TOKEN
      </Button> */
}
