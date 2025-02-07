import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouteUser = ({ element }) => {
  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

  const isAuth = !!auth && roles_user.includes(1);
  // const isAuth = !!auth && roles_user.includes("user");
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return element;
};




export const PrivateRouteAdmin = ({ element }) => {
  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);
  console.log(auth, roles_user);
  const isAuth = !!auth && roles_user.includes(2);
  // const isAuth = !!auth && roles_user.includes("admin");
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return element;
};






// export const PrivateRouteUser = ({ children }) => {
//   const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

//   const isAuth = !!auth && roles_user.includes(1);
//   // const isAuth = !!auth && roles_user.includes("user");
//   console.log(isAuth);
//   if (!isAuth) {
//     return <Navigate to="/login" replace />;
//   }

//   return children ? children : <Outlet />;
// };

// export const PrivateRouteAdmin = ({ children }) => {
//   const { auth, roles_user } = useSelector((state) => state.USER_AUTH);
//   console.log(auth, roles_user);
//   const isAuth = !!auth && roles_user.includes(2);
//   // const isAuth = !!auth && roles_user.includes("admin");
//   console.log(isAuth);
//   if (!isAuth) {
//     return <Navigate to="/home" replace />;
//   }

//   return children ? children : <Outlet />;
// };
