import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutLogin from "../pages/login/layout/LayoutLogin";
// import Home from "../pages/home/Home";
// import Login from "../pages/login/layout-login/LayoutLogin";
// import HomeRouter from "./HomeRouter";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminHomeRouter from "./AdminHomeRouter";
import AdminRoute from "./AdminRoute";

export default function AppRouter() {
 
//   const dispatch = useDispatch();


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LayoutLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminHomeRouter />
            </AdminRoute>
          }
        />
        {/* <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRouter />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
