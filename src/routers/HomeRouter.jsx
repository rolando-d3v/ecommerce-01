import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LayoutPagos from "../pages_user/pagos/LayoutPagos";
import LayoutUser from "../pages_user/user/LayoutUser";

export default function HomeRouter() {
  // const { estado_sidebar, isDarkMode } = useSelector(
  //   (state) => state.baseStyle
  // );

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
      <Routes>
        <Route path="/pagos" element={<LayoutPagos />} />
        <Route path="/data-user" element={<LayoutUser />} />
        {/* <Route path="/user/*" element={<Navigate to="/pagos" />} /> */}
        {/* <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    </div>
  );
}

// ${!estado_sidebar && css.open_side}
