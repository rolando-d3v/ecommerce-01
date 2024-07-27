import React from "react";
import x from "./promocionID.module.scss";
import id_pro from "../../../assets/productos/id_producto.png";

export default function PromocionesId() {
  const product = {
    id_producto_i: 1,
    nombre: "Laptops Dell",
    descripción:
      "laptop Dell, Procesador i5, Memoria ram 16GB, SSD 500GB, Tarjeta de video GTX 3050",
    precio: 1560,
    image: id_pro,
    cantidadEnStock: 10,
    categoriaID: 10,
    usuarioID: "212513513651",
    fechaPublicación: "2024-05-01",
  };

  return (
    <section className={x.promo_id}>
      <div className={x.content}>
        <img src={id_pro} alt="productos" className={x.img} />
        <article className={x.content_text}>
          <h3 className={x.title}> {product.nombre} </h3>
          <p className={x.description}>{product.descripción} </p>

          <p className={x.oferta}>Oferta Especial</p>
          <strong className={x.porcentaje}>50%</strong>
        </article>
      </div>
    </section>
  );
}
