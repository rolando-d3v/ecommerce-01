import React, { useState } from "react";
import css from "./Navigator.module.scss";
import logo from "../../assets/logo/logo_eco.png";
import * as FaIcons from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { xlogin_false } from "../../Redux/usuarioAuthSlice";

const list01 = [
  { id: 1, name: "HOMBRE", url: "/hombre" },
  { id: 2, name: "MUJER", url: "/mujer" },

  // { id: 4, name: "VENTAS", url: "/ventas" },
];

export default function Navigator() {
  const [colorBg, setColorBg] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColorBg(true);
    } else {
      setColorBg(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  let location = useLocation();

  console.log(location);
  console.log(color);

  React.useEffect(() => {
    if (location?.pathname === "/home" || location?.pathname === "/"  ) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [location]);


  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);
  const { list } = useSelector((state) => state.CART_APP);
  const dispatch = useDispatch();

  return (
    <header
      className={`${colorBg === true && css.header_bg_scroll}  ${
        color === true && css.header_position
      }       ${css.header}`}
    >
      <div className={css.content_header}>
        <nav className={css.navigation_logo}>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </nav>

        <div className={css.content_navegation}>
          <nav className={css.navigation_links}>
            {list01.map((li, index) => {
              return (
                <Link key={index} to={li.url} className={css.link_item}>
                  <span> {li.name} </span>
                </Link>
              );
            })}
          </nav>

          <nav className={css.navigation03}>
            <Link to="/comentarios" className={css.link_item}>
              COMENTARIOS
            </Link>
            <FaIcons.FaMagnifyingGlass className={css.icon_item} />

            {auth === true ? (
              <Link to="/user/data-user" className={css.link_item}>
                <FaIcons.FaUser className={css.icon_item} />
              </Link>
            ) : (
              <Link to="/login" className={css.link_item}>
                <FaIcons.FaUser className={css.icon_item} />
              </Link>
            )}

            {auth === true && (
              <FaIcons.FaPowerOff
                className={css.icon_item}
                onClick={() => dispatch(xlogin_false())}
              />
            )}
            <Link to="/carrito" className={css.link_item_carrito}>
              <FaIcons.FaCartShopping className={css.icon_item} />
              <span className={css.icon_numero}> {list.length} </span>
            </Link>

            <Link to="/user/pagos" className={css.link_item}>
              <FaIcons.FaPaypal className={css.icon_item} />
            </Link>
            {/* <Link to="/login">Login</Link> */}
            {/* <Link to="/home">Home</Link>
        <Link to="/user/pagos">user pagos</Link>
        <Link to="/admin/user">Admin user</Link>
        <Link to="/admin/productos">Admin productos</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
