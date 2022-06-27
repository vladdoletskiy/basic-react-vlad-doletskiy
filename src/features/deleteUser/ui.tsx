import React from 'react';
import { Button, DeleteForeverIcon } from 'shared';
import { deleteUserModel } from 'features/deleteUser';

export const DeleteUser: React.FunctionComponent = () => {
  return (
    <Button
      sx={{ width: 1 }}
      onClick={() => {
        deleteUserModel.userDeleted();
      }}
      variant="contained"
    >
      <DeleteForeverIcon />
    </Button>
  );
};
