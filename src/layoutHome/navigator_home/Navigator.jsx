import React from "react";
import css from "./Navigator.module.scss";
import logo from "../../assets/logo/logo_eco.png";
import * as FaIcons from "react-icons/fa6";
import { Link } from "react-router-dom";

const list01 = [
  { id: 1, name: "HOMBRE", url: "/hombre" },
  { id: 2, name: "MUJER", url: "/mujer" },
  { id: 3, name: "NIÑOS", url: "/ninos" },
  { id: 4, name: "VENTAS", url: "/ventas" },
];

export default function Navigator() {
  return (
    <header className={css.header}>
      <nav className={css.navigation01}>
        {list01.map((li, index) => {
          return (
            <Link key={index} to={li.url} className={css.link_item}>
              <span> {li.name} </span>
            </Link>
          );
        })}
      </nav>
      <nav className={css.navigation02}>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </nav>
      <nav className={css.navigation03}>
        <Link to="/ofertas" className={css.link_item}>
          OFERTAS
        </Link>
        <Link to="/comentarios" className={css.link_item}>
          COMENTARIOS
        </Link>
        <FaIcons.FaMagnifyingGlass className={css.icon_item} />
        <Link to="/login" className={css.link_item}>
          <FaIcons.FaUser className={css.icon_item} />
        </Link>
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
