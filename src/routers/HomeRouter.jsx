import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LayoutPagos from "../pages_user/pagos/LayoutPagos";

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
      </Routes>
    </div>
  );
}

// ${!estado_sidebar && css.open_side}
