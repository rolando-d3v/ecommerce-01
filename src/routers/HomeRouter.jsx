import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LayoutPagos from "../pages_user/pagos/LayoutPagos";
import LayoutUser from "../pages_user/user/LayoutUser";
import Navigator from "../layoutHome/navigator_home/Navigator";
import LayoutHome from "../pages/home/layout/LayoutHome";
import LayoutHombre from "../pages/page_hombre/layout/LayoutHombre";
import LayoutLogin from "../pages/login/layout/LayoutLogin";
import LayoutMujer from "../pages/page_mujer/layout/LayoutMujer";
import LayoutNinos from "../pages/page_ninos/layout/LayoutNinos";
import LayoutCarrito from "../pages/pages_carrito/layout_car/LayoutCarrito";
import { PrivateRouteUser } from "./PrivateRoute";

export default function HomeRouter() {
  // const { estado_sidebar, isDarkMode } = useSelector(
  //   (state) => state.baseStyle
  // );
  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

  return (
    <div
    // initial={{ opacity: 0, scale: 0.9 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 0.2 }}
    // className={`${css.homeRoter_principal}
    //  ${isDarkMode ? css.principalDark : css.principalDia} `}
    >
      {/* <HeadNavegador />
      <SidebarCentroM /> */}
      <Navigator />
      <Routes>
        <Route index element={<LayoutHome />} />
        <Route path="/home" element={<LayoutHome />} />
        <Route path="/login" element={<LayoutLogin />} />
        <Route path="/hombre" element={<LayoutHombre />} />
        <Route path="/mujer" element={<LayoutMujer />} />
        <Route path="/ninos" element={<LayoutNinos />} />
        <Route path="/carrito" element={<LayoutCarrito />} />

        <Route
          path="/user/*"
          element={
            <PrivateRouteUser>
              <UserRouter />
            </PrivateRouteUser>
          }
        />
      </Routes>
    </div>
  );
}

function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/pagos" element={<LayoutPagos />} />
        <Route path="/data-user" element={<LayoutUser />} />
      </Routes>
    </div>
  );
}
