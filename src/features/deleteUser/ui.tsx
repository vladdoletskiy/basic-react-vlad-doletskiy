import React from 'react';
import { Button, DeleteForeverIcon } from 'shared';
import { viewerModel } from 'entities/viewer';
import { deleteUserModel } from 'features';

export const DeleteUser: React.FunctionComponent = () => {
  return (
    <Button
      onClick={() => {
        deleteUserModel.userDeleted();
        viewerModel.logoutRequested();
      }}
      variant="contained"
    >
      <DeleteForeverIcon />
    </Button>
  );
};
