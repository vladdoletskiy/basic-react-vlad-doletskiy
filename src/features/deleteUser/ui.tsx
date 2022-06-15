import React from 'react';
import { Button, DeleteForeverIcon } from 'shared';

export const DeleteUser: React.FunctionComponent = () => {
  return (
    <>
      <Button variant="contained">
        <DeleteForeverIcon />
      </Button>
    </>
  );
};
