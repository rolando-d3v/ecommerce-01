import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  //path de la pagina que navegas para logear y regresar a la misma pagina
  // localStorage.setItem("lastpath", rest.location.pathname);

  const {auth} = useSelector((state) => state.perSisRolStyle);

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;








