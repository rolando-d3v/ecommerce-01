import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./routerAdmin.module.scss";
// import { motion } from "framer-motion";
// import css from "./homeRouter.module.scss";

import SidebarAdmin from "../../layoutAdmin/sidebar/SidebarAdmin";
import LayoutProductosAdmin from "../../pages_admin/productos/LayoutProductosAdmin";
import LayoutUsuariosAdmin from "../../pages_admin/usuarios/LayoutUsuariosAdmin";

export default function RouterAdmin() {
  return (
    <div

    className={css.admin}

    // className={`${css.homeRoter_principal}
    //  ${isDarkMode ? css.principalDark : css.principalDia} `}
    >
      <SidebarAdmin />

      <Routes>
        <Route path="/productos" element={<LayoutProductosAdmin />} />
        <Route path="/usuarios" element={<LayoutUsuariosAdmin />} />
      
      </Routes>
    </div>
  );
}
