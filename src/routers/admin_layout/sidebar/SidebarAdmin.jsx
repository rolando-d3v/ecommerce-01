import React from "react";
import css from "./sidebar.module.scss";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  const url = [
    { id: 1, url: "/admin/usuarios", name: "Usuarios" },
    { id: 2, url: "/admin/productos", name: "Productos" },
  ];

  return (
    <aside className={css.aside}>
      <div className={css.div_logo}  >logo</div>
      <hr />

      <div className={css.list_url}  >
        {url.map((pro) => {
          return <Link className={css.link}  to={pro.url}   >{pro.name}</Link>;
        })}
      </div>
    </aside>
  );
}
