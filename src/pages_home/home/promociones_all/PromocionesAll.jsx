import React from "react";
import css from "./promociones.module.scss";
import cadena from "../../../assets/productos/cadena.png";
import chompa from "../../../assets/productos/chompa.png";
import vaso from "../../../assets/productos/vaso.png";

export default function PromocionesAll() {
  const productos = [
    {
      id_producto_i: 1,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: cadena,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
    {
      id_producto_i: 2,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: chompa,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
    {
      id_producto_i: 3,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: vaso,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
    {
      id_producto_i: 4,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: cadena,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
    {
      id_producto_i: 5,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: chompa,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
    {
      id_producto_i: 6,
      nombre: "laptops",
      descripción: "laptop dell",
      precio: 1560,
      image: vaso,
      cantidadEnStock: 10,
      categoriaID: 10,
      usuarioID: "212513513651",
      fechaPublicación: "2024-05-01",
    },
  ];

  return (
    <div className={css.promociones}>
      {/* <div className={css.content} > */}
        <div className={css.content_card}>
          {productos.map((pro) => {
            return (
              <article key={pro.id_producto_i} className={css.card_item}>
                <img src={pro.image} alt="imagen" className={css.imagen} />

                <div>
                  <p> {pro.nombre} </p>
                  <strong> S/ {pro.precio} </strong>
                </div>
              </article>
            );
          })}
        </div>
      {/* </div> */}
    </div>
  );
}
