import axios from 'axios';
import { authConfig } from 'shared';
import { User } from 'entities/viewer/model/types';

export const callApi = () => {
//   const options = {
//     method: 'GET',
//     url: `https://dev-lp34u8l1.us.auth0.com/api/v2/users/`,
//     headers: {
//       authorization: `Bearer ${authConfig.tokenApi}`,
//       'content-type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
//       'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
//     },
//   };
//   axios(options)
    // .get(`https://dev-lp34u8l1.us.auth0.com/api/v2/users/`, {
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //     // 'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    //     authorization: `Bearer ${authConfig.tokenApi}`,
    //     'content-type': 'application/json',
    //   },
    // })
    // .then((response) => {
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
};
