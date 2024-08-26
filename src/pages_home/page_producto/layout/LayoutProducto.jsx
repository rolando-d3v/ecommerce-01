import React from "react";
import css from "./layout.module.scss";
import productList from "../../../data/product.json";
import ProductoItem from "../producto_item/ProductoItem";
import SidebarPro from "../sidebar_producto/SidebarPro";

export default function LayoutProducto() {
  return (
    <div className={css.layout_hombre}>
      <SidebarPro />

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
