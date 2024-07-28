import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRouteAdmin } from "./PrivateRoute";
import RouterHome from "./RouterHome";
import RouterAdmin from "./RouterAdmin";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* router de public & user auth */}
        <Route path="/*" element={<RouterHome />} />

        {/* router de admin */}
        <Route
          path="/admin/*"
          element={
            <PrivateRouteAdmin>
              <RouterAdmin />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   {roles_user.includes("admin") ? null : <Navigator />}

    //   <Routes>
    //     <Route index element={<LayoutHome />} />
    //     <Route path="/home" element={<LayoutHome />} />
    //     <Route path="/login" element={<LayoutLogin />} />
    //     <Route path="/hombre" element={<LayoutHombre />} />
    //     <Route path="/mujer" element={<LayoutMujer />} />
    //     <Route path="/ninos" element={<LayoutNinos />} />
    //     <Route path="/carrito" element={<LayoutCarrito />} />

    //     <Route
    //       path="/user/*"
    //       element={
    //         <PrivateRouteUser>
    //           <HomeRouter />
    //         </PrivateRouteUser>
    //       }
    //     />
    //     <Route
    //       path="/admin/*"
    //       element={
    //         <PrivateRouteAdmin>
    //           <AdminHomeRouter />
    //         </PrivateRouteAdmin>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}
