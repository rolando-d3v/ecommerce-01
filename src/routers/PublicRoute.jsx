import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

  return !auth ? children : <Navigate to="/home" />  
};

export default PublicRoute;
