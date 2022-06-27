import React from 'react';
import { Button, DeleteForeverIcon } from 'shared';
import { deleteUserModel } from 'features/deleteUser';

export const DeleteUser: React.FunctionComponent = () => {
  return (
    <Button
      onClick={() => {
        deleteUserModel.userDeleted();
      }}
      variant="contained"
    >
      <DeleteForeverIcon />
    </Button>
  );
};
