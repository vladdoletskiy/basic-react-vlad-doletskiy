import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';


interface ILoginButtonProps {

}

const LoginButton: React.FunctionComponent<ILoginButtonProps> = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <Button onClick={() => loginWithRedirect()} color="inherit">
      Login
    </Button>
  );
};

export default LoginButton;
