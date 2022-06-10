import axios from 'axios';
import { authConfig } from 'shared';
import { User } from 'entities/viewer/model/types';

export const callApi = () => {
  const options = {
    method: 'GET',
    url: `https://dev-lp34u8l1.us.auth0.com/api/v2/users/${id}`,
    headers: {
      authorization: `Bearer ${authConfig.tokenApi}`,
      'content-type': 'application/json',
    },
  };
  axios(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
