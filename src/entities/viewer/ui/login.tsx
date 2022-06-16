import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared';
import { viewerModel } from 'entities/viewer';

export const LoginButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
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
