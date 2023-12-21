import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutLogin from "../pages/login/layout/LayoutLogin";
// import Home from "../pages/home/Home";
// import Login from "../pages/login/layout-login/LayoutLogin";
// import HomeRouter from "./HomeRouter";
// import PrivateRoute from "./PrivateRoute";

import AdminHomeRouter from "./AdminHomeRouter";
import { PrivateRouteAdmin, PrivateRouteUser } from "./PrivateRoute";
import HomeRouter from "./HomeRouter";
import Navigator from "../layoutHome/navigator_home/Navigator";
import LayoutHome from "../pages/home/layout/LayoutHome";
import { useSelector } from "react-redux";
// import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  //   const dispatch = useDispatch();

  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

  return (
    <BrowserRouter>
      {roles_user.includes("admin") ? null : <Navigator />}

      <Routes>
        <Route index element={<LayoutHome />} />
        <Route path="/home" element={<LayoutHome />} />
        <Route path="/login" element={<LayoutLogin />} />

        <Route
          path="/user/*"
          element={
            <PrivateRouteUser>
              <HomeRouter />
            </PrivateRouteUser>
          }
        />
        <Route
          path="/admin/*"
          element={
            <PrivateRouteAdmin>
              <AdminHomeRouter />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
