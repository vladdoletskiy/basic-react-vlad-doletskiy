import React from 'react';
import { Button, DeleteForeverIcon } from 'shared/ui/mui';
import { deleteUserModel } from 'features/user-delete';

export const DeleteUser: React.FunctionComponent = () => {
  return (
    <Button
      sx={{ width: 1 }}
      onClick={() => {
        deleteUserModel.userDeletetion();
      }}
      variant="contained"
    >
      <DeleteForeverIcon />
    </Button>
  );
};
