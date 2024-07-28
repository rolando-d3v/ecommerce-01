import React from "react";
import css from "./layout.module.scss";
import productList from "../../../data/product.json";
import ProductoItem from "../producto_item/ProductoItem";

export default function LayoutHombre() {
  return (
    <div className={css.layout_hombre}>
      <aside className={css.aside}>
        <h1 className={css.title}>Categorias de Zapatos</h1>
        <div className={css.list}>
          <p className={css.item}>Deportivas</p>
          <p className={css.item}>Casuales</p>
          <p className={css.item}>Sport</p>
        </div>
        <hr  className={css.separador}/>
        <h1 className={css.title}>Tallas</h1>
        <p className={css.item}>
          La mayoría de nuestros zapatos sólo vienen en tallas completas. Si
          tienes media talla, selecciona también la talla entera más cercana.
        </p>
      </aside>

      <section className={css.content}>
        {productList.map((item) => {
          return (
            <div key={item.id}>
              <ProductoItem data={item} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
