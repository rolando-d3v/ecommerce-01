import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const {auth} = useSelector((state) => state.perSisRolStyle);

  return !auth ? children : <Navigate to="/home" />  
};

export default PublicRoute;
