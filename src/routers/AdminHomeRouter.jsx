import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import css from "./homeRouter.module.scss";
import LayoutProductos from "../pages_admin/productos/LayoutProductos";
import LayoutUser from "../pages_admin/user/layoutUser";


export default function AdminHomeRouter() {

  return (
    <div
    
      // className={`${css.homeRoter_principal} 
      //  ${isDarkMode ? css.principalDark : css.principalDia} `}
    >

      <div>
        hola Admin
      </div>

       <Routes>
          <Route path="/productos" element={<LayoutProductos />} />
          <Route path="/user" element={<LayoutUser />} />
        </Routes>
   

  
     
    </div>
  );
}


