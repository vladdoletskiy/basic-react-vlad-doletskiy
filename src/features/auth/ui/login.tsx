import React, { useState, useEffect } from 'react';
import { Button } from '../../../shared/ui/elements';
import { auth0 } from '../../../entities/viewer/model/createClient';

export const LoginButton: React.FunctionComponent = () => {
  return (
    <Button onClick={async () => await auth0.loginWithRedirect()} color="inherit">
      Login
    </Button>
  );
};
