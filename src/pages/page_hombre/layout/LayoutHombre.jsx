import React from "react";
import css from "./layout.module.scss";
import productList from "../../../data/product.json";
import ProductoItem from "../producto_item/ProductoItem";


export default function LayoutHombre() {
  return (
    <div>
      <section>
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
