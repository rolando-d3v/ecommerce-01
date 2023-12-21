import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import css from "./homeRouter.module.scss";
import LayoutProductos from "../pages_admin/productos/LayoutProductos";


export default function AdminHomeRouter() {

  return (
    <div
    
      // className={`${css.homeRoter_principal} 
      //  ${isDarkMode ? css.principalDark : css.principalDia} `}
    >

       <Routes>
          <Route path="/documentos-recibidos" element={<LayoutProductos />} />
        </Routes>
   

  
     
    </div>
  );
}


