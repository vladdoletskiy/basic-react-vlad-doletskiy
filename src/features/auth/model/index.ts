import { auth0, setUser, isAuth } from '../../../entities/viewer';

export const login = () => {
  auth0.loginWithPopup().then(() => {
    auth0
      .getUser()
      .then((user) => {
        setUser(user);
      })
      .then(() => {
        auth0.isAuthenticated().then((isauth) => {
          isAuth(isauth);
        });
      });
  });
};

export const logout = () => {
  auth0.logout();
};
