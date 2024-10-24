// import { useSelector } from "react-redux";
// import LayoutPagos from "../../pages_user/pagos/LayoutPagos";
// import LayoutUser from "../../pages_user/user/LayoutUser";
// import LayoutHome from "../../pages_home/home/layout/LayoutHome";
// import LayoutLogin from "../../pages_home/login/layout/LayoutLogin";
// import LayoutCarrito from "../../pages_home/pages_carrito/layout_car/LayoutCarrito";
// import { PrivateRouteUser } from "../PrivateRoute";
// import LayoutProducto from "../../pages_home/page_producto/layout/LayoutProducto";



import { useEffect, useState } from "react";
import x from "./routerHome.module.scss";
import { Outlet } from "react-router-dom";
import Navigator from "../navigator/Navigator";
import Footer from "../footer/Footer";

export default function RootLayout() {

  console.log("inicio");
  
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
      <main>
        <Outlet />
      </main>

      <Footer />

      {/* <Routes>
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
        </Routes> */}
 
    </div>
  );
}

