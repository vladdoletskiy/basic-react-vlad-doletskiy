// import { viewerModel } from '../../../entities/viewer';

// export const login = () => {
//   viewerModel.auth0.loginWithPopup().then(() => {
//     viewerModel.auth0
//       .getUser()
//       .then((user) => {
//         viewerModel.getUserInfo(user);
//       })
//       .then(() => {
//         viewerModel.auth0.isAuthenticated().then((isauth) => {
//           viewerModel.getAuthState(isauth);
//         });
//       });
//   });
// };

// export const logout = () => {
//   viewerModel.auth0.logout();
// };

// export const login = () => {
//   viewerModel.auth0.loginWithPopup();
// };

// viewerModel.getUserFx(async () => {
//   const user = await viewerModel.auth0.getUser();
//   return user;
// });
