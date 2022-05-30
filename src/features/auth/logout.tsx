import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

import * as React from 'react';


interface ILogOutButtonProps {
 
}

const LogOutButton: React.FunctionComponent<ILogOutButtonProps> = () => {
  const { logout } = useAuth0();
  
  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })} color="inherit">
      Log out
    </Button>
  );
};

export default LogOutButton;
