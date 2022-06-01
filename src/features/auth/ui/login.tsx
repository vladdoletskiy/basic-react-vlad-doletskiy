import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared/ui/elements';
import { auth0 } from '../../../entities/viewer/model/createClient';

export const LoginButton: React.FunctionComponent = () => {
  
//   это просто для теста что б понять как получить пользователя
    useEffect(() => {
    async function fetchData() {
      const redirectResult = await auth0.handleRedirectCallback();
      const user = await auth0.getUser();
      console.log(user);
      console.log(redirectResult);
    }
  });


  return (
    <Button onClick={() => auth0.loginWithRedirect()} color="inherit">
      Login
    </Button>
  );
};
