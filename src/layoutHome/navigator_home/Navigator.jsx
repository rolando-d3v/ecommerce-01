import React from "react";
import css from "./Navigator.module.scss";
import logo from "../../assets/logo/logo_eco.png";
import * as FaIcons from "react-icons/fa6";
import { Link } from "react-router-dom";

const list01 = [
  { id: 1, name: "HOMBRE", url: "/men" },
  { id: 2, name: "MUJER", url: "/women" },
  { id: 3, name: "NIÑOS", url: "/user/pagos" },
  { id: 4, name: "VENTAS", url: "/home" },
];

export default function Navigator() {
  return (
    <header className={css.header}>
      <nav className={css.navigation01}>
        {list01.map((li) => {
          return (
            <Link to={li.url} className={css.link_item}>
              <span> {li.name} </span>
            </Link>
          );
        })}
      </nav>
      <nav className={css.navigation02}>
        <img src={logo} alt="logo" />
      </nav>
      <nav className={css.navigation03}>
        <Link to="/ofertas" className={css.link_item}>
          OFERTAS
        </Link>
        <Link to="/comentarios" className={css.link_item}>
          COMENTARIOS
        </Link>
        <FaIcons.FaMagnifyingGlass className={css.icon_item} />
        <FaIcons.FaUser className={css.icon_item} />
        <FaIcons.FaCartShopping className={css.icon_item} />
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/home">Home</Link>
        <Link to="/user/pagos">user pagos</Link>
        <Link to="/admin/user">Admin user</Link>
        <Link to="/admin/productos">Admin productos</Link> */}
      </nav>
    </header>
  );
}
