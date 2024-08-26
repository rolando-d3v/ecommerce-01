import React from "react";
import css from "./sidebar.module.scss";

export default function SidebarPro() {
  return (
    <aside className={css.aside}>
      <h1 className={css.title}>Categorias de Zapatos</h1>
      <div className={css.list}>
        <p className={css.item}>Deportivas</p>
        <p className={css.item}>Casuales</p>
        <p className={css.item}>Sport</p>
      </div>
      <hr className={css.separador} />
      <h1 className={css.title}>Marca</h1>
      <div className={css.list}>
        <p className={css.item}>Adidas</p>
        <p className={css.item}>Nike</p>
        <p className={css.item}>Rebook</p>
      </div>
      <hr className={css.separador} />
      <h1 className={css.title}>Tallas</h1>
      <p className={css.item}>
        La mayoría de nuestros zapatos sólo vienen en tallas completas. Si
        tienes media talla, selecciona también la talla entera más cercana.
      </p>
    </aside>
  );
}
