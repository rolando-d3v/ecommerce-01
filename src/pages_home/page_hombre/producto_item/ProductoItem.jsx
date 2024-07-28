import React from "react";
import css from "./producto.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";
import { toast } from "sonner";

export default function ProductoItem({ data }) {
  const dispatch = useDispatch();
  const agregarCarrito = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
    
    toast("Se agrego Producto", {
      className: "my-classname",
      description: "Al carrito",
      duration: 1500,
      position: "top-center",
      style: {
        background: "#000",
        color: "white",
      },
      // icon: <MyIcon />,
    });
  };

  return (
    <div className={css.cartItem}>
      <div className={css.div_img}>
        <img src={data.imageUrl} alt="fee" className={css.img_item} />
        <p className={css.name}>{data.name}</p>
      </div>

      <div className={css.footer}>
        <article className={css.data_producto}>
          <p className={css.marca}>{data.author}</p>
          <span className={css.price}> S/ {data.price}</span>
        </article>
        <button onClick={agregarCarrito} className={css.btn_add}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
