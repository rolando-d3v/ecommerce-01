import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LayoutPagos from "../../pages_user/pagos/LayoutPagos";
import LayoutUser from "../../pages_user/user/LayoutUser";
import x from "./routerHome.module.scss";

import LayoutHome from "../../pages_home/home/layout/LayoutHome";
import LayoutLogin from "../../pages_home/login/layout/LayoutLogin";
import LayoutCarrito from "../../pages_home/pages_carrito/layout_car/LayoutCarrito";

import { PrivateRouteUser } from "../PrivateRoute";
import Navigator from "../../layout_home/navigator_home/Navigator";
import LayoutProducto from "../../pages_home/page_producto/layout/LayoutProducto";

export default function RouterHome() {
  // const { estado_sidebar, isDarkMode } = useSelector(
  //   (state) => state.baseStyle
  // );

  return (
    <div
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.2 }}
      className={`${x.theme} `}
    >
    
      <Navigator />
      <div className={x.diva}>
        <Routes>
          <Route index element={<LayoutHome />} />
          <Route path="/home" element={<LayoutHome />} />
          <Route path="/login" element={<LayoutLogin />} />
          <Route path="/carrito" element={<LayoutCarrito />} />

          <Route path="/seccion/:id" element={<LayoutProducto />} />

          <Route
            path="/user/*"
            element={
              <PrivateRouteUser>
                <UserRouter />
              </PrivateRouteUser>
            }
          />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>

 
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
