// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useStore } from 'effector-react';
// import { $isAuth } from '../../entities/viewer';

// export const PrivateRoutes: React.FunctionComponent = ({ children }) => {
//   const location = useLocation();
//   const auth = useStore($isAuth);

//   if (!auth) {
//     return <Navigate to="/home" />;
//   }
//   return children;
// };
