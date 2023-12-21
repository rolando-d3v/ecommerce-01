import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import css from "./homeRouter.module.scss";
import HeadNavegador from "../layoutBase/navigation/HeadNavegador";
import SidebarCentroM from "../layoutBase/sidebar/SidebarCentroM";
import DecretarDocumentos from "../pages/decreto_documentos_jefe/layout/DecretarDocumentos";
import DocRecibidos from "../pages/documentos_recibidos/layout/DocRecibidos";
import Home from "../pages/home/Home";
import IdDocumento from "../pages/id_documento/layout/IdDocumento";
import RemitirDoc from "../pages/remitir_documento/layout/RemitirDoc";
import DerivarDocumentos from "../pages/derivar_documentos/layout/DerivarDocumentos";
import IdDecretoJefe from "../pages/id_decreto_jefe/layout/IdDecreto";
import RegistroMultiple from "../pages/registro_multiple/layout/RegistroMultiple";
import Layout404 from "../pages/404/Layout404/Layout404";
import DocRemitidos from "../pages/documentos_remitidos/layout/DocRemitidos";
import RegistroIndividualInterno from "../pages/registro_individual_interno/layout/RegistroIndividualInterno";
import RegistroIndividualExterno from "../pages/registro_individual_externo/layout/RegistroIndividualExterno";
import IdFirmaJefe from "../pages/id_firma_jefe/layout/IdFirmaJefe";
import TbFirmarDocumentosJefe from "../pages/firmar_documentos_jefe/layout/FirmarDocumentosJefe";
import FirmarDocumentosGral from "../pages/firmar_documentos_gral/layout/FirmarDocumentosGral";
import IdFirmaGral from "../pages/id_firma_gral/layout/IdFirmaGral";
import FirmarDocumentosSD from "../pages/firmar_documentos_SD/layout/FirmarDocumentosSD";
import DocumentoPendienteServicio from "../pages/documentos_pendientes_servicio/layout/DocumentoPendienteServicio";
import DocumentoPendienteUser from "../pages/documentos_pendientes_user/layout/DocumentoPendienteUser";
import IdPendienteUser from "../pages/id_reg_pendiente_user/layout/IdPendienteUser";
import IdFirmaSD from "../pages/id_firma_SD/layout/IdFirmaSD";
import RegistroIndividualServicio from "../pages/registro_individual_servicio/layout/RegistroIndividualServicio";
import DecretoDocumentoSDExterno from "../pages/decreto_documentos_SD_externo/layout/DecretoDocumentoSDExterno";
import DecretoDocumentoSD from "../pages/decreto_documentos_SD/layout/DecretoDocumentoSD";
import IdDecretoSD from "../pages/id_decreto_SD/layout/IdDecretoSD";
import Opciones from "../pages/opciones/layout/Opciones";
import Fondo from "../pages/login/layout-login/Fondo";
import DocumentoDevueltos from "../pages/documentos_devueltos/layout/DocumentoPendienteUser";
import IdDevueltoUser from "../pages/id_reg_devuelto/layout/IdDevueltoUser";
import DecretarDocumentosGral from "../pages/decreto_documentos_gral/layout/DecretarDocumentosGral";
import IdDecretoGral from "../pages/id_decreto_gral/layout/IdDecretoGral";


export default function HomeRouter() {
  const { estado_sidebar, isDarkMode } = useSelector(
    (state) => state.baseStyle
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`${css.homeRoter_principal} 
       ${isDarkMode ? css.principalDark : css.principalDia} `}
    >
       {/* <Fondo/> */}
      <HeadNavegador />
      <SidebarCentroM />
      <div
        className={`${css.content_layout} 
         ${isDarkMode ? css.contentDark : css.contentDia} 
         
        ${!estado_sidebar && css.change_border} 
        
        ${!estado_sidebar && css.open_side}  
        
        `}
      >
       <div className={css.content2} >
       <Routes>
          <Route path="/documentos-recibidos" element={<DocRecibidos />} />
          <Route path="/documentos-remitidos" element={<DocRemitidos />} />
          <Route path="/documentos-recibidos/:id" element={<IdDocumento />} />
          <Route path="/opciones-jefe" element={<Opciones />} />
          {/* USER */}
          <Route path="/documentos-pendientes-user" element={<DocumentoPendienteUser />} />
          <Route path="/id-documento-pendiente-user/:id" element={<IdPendienteUser />} />
          <Route path="/documentos-devueltos" element={<DocumentoDevueltos />} />
          <Route path="/documentos-devueltos/:id" element={<IdDevueltoUser />} />
          <Route
            path="/registro_individual_interno"
            element={<RegistroIndividualInterno />}
          />
          <Route
            path="/registro_individual_externo"
            element={<RegistroIndividualExterno />}
          />
          {/* JEFES */}
          <Route
            path="/decreto-documentos-jefe"
            element={<DecretarDocumentos />}
          />
          <Route
            path="/decreto-documentos-jefe/:id"
            element={<IdDecretoJefe />}
          />
          <Route
            path="/firmar-documentos-jefe"
            element={<TbFirmarDocumentosJefe />}
          />
          <Route path="/firma-documento-jefe/:id" element={<IdFirmaJefe />} />
          {/* SUB DIE */}
          <Route
            path="/decreto-documentos-SD"
            element={<DecretoDocumentoSD />}
          />
          <Route
            path="/decreto-documentos-SD-externo"
            element={<DecretoDocumentoSDExterno />}
          />
          <Route
            path="/decreto-documentos-SD/:id"
            element={<IdDecretoSD />}
          />
          <Route
            path="/firmar-documentos-SD"
            element={<FirmarDocumentosSD />}
          />
          <Route path="/id-firma-documento-SD/:id" element={<IdFirmaSD />} />
          {/* GRAL DIE */}
          <Route
            path="/firmar-documentos-gral"
            element={<FirmarDocumentosGral />}
          />
          <Route path="/firma-documento-gral/:id" element={<IdFirmaGral />} />
          <Route
            path="/decreto-documentos-gral"
            element={<DecretarDocumentosGral />}
          />
          <Route path="/decreto-documento-gral/:id" element={<IdDecretoGral />} />
          {/* SERVICIO */}
          <Route path="/documentos-pendientes-servicio" element={<DocumentoPendienteServicio />} />
          <Route path="/derivar-documentos" element={<DerivarDocumentos />} />
          <Route path="/remitir-documento" element={<RemitirDoc />} />
          <Route
            path="/registro-multiple-serv"
            element={<RegistroMultiple />}
          />
          <Route
            path="/registro-individual"
            element={<RegistroIndividualServicio />}
          />
          {/* HOME */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
       </div>
      </div>

      <article
        className={`${css.footer}  
        ${isDarkMode ? css.footerDark : css.footerDia}  `}
      >
        <p className={css.text_footer}>
          {" "}
          Departamento de Tecnologías para Inteligencia - Copyright ©{" "}
          {new Date().getFullYear()}{" "}
        </p>
        <p className={css.text_footer}>
          {" "}
          MOCHE - Versión {process.env.REACT_APP_VERSION_MOCHE}
        </p>
      </article>
     
    </motion.div>
  );
}

// ${!estado_sidebar && css.open_side}
