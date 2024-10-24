// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { PrivateRouteAdmin } from "./PrivateRoute";
// import RouterAdmin from "./router_admin/RouterAdmin";
// import RouterHome from "./router_home/RouterHome";

// export default function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* router de public & user auth */}
//         <Route path="/*" element={<RouterHome />} />

//         {/* router de admin */}
//         <Route
//           path="/admin/*"
//           element={
//             <PrivateRouteAdmin>
//               <RouterAdmin />
//             </PrivateRouteAdmin>
//           }
//         />
//       </Routes>
//     </BrowserRouter>

//   );
// }

import { createBrowserRouter } from "react-router-dom";
import LayoutHome from "../pages_home/home/layout/LayoutHome";
import LayoutProducto from "../pages_home/page_producto/layout/LayoutProducto";
import { PrivateRouteAdmin, PrivateRouteUser } from "./PrivateRoutes";
import LayoutPagos from "../pages_user/pagos/LayoutPagos";
import LayoutProductosAdmin from "../pages_admin/productos/LayoutProductosAdmin";

import LayoutLogin from "../pages_home/login/layout/LayoutLogin";
import LayoutUser from "../pages_user/user/LayoutUser";
import LayoutCarrito from "../pages_home/pages_carrito/layout_car/LayoutCarrito";

import AdminLayout from "./admin_layout/layout/AdminLayout";
import LayoutUsuariosAdmin from "../pages_admin/usuarios/LayoutUsuariosAdmin";
import RootLayout from "./root_layout/layout/RootLayout";

const NoFount = () => {
  return <div>Fount 404</div>;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <LayoutHome />,
      },
      {
        path: "login",
        element: <LayoutLogin />,
      },
      {
        path: "carrito",
        element: <LayoutCarrito />,
      },
      {
        path: "seccion/:id",
        element: <LayoutProducto />,
      },
      // USER AUTH
      {
        path: "pagos",
        element: <PrivateRouteUser element={<LayoutPagos />} />,
      },
      {
        path: "data-user",
        element: <PrivateRouteUser element={<LayoutUser />} />,
      },
      // ADMIN AUTH
      {
        path: "admin",
        element: <PrivateRouteAdmin element={<AdminLayout />} />, // Solo accesible para admin
        children: [
          {
            path: "producto",
            element: <LayoutProductosAdmin />, // Ruta dentro del layout admin para crear productos
          },
          {
            path: "usuarios",
            element: <LayoutUsuariosAdmin />, // Ruta dentro del layout admin para crear productos
          },
        ],
      },
      {
        path: "*",
        element: <NoFount />,
      },
    ],
  },
]);
