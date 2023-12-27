import React from "react";
import css from "./producto.module.scss"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../Redux/cartSlice"


export default function ProductoItem({data}) {

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert("Successfully!")
    }

  return (
    <div className={css.bookItem}>
      <div className={css.bookInfo}>
        <img src={data.imageUrl} alt="" />
        <p className={css.name}>{data.name}</p>
        <p>
          <i>{data.author}</i>
        </p>
      </div>
      <div className={css.footer}>
        <span className={css.price}>{data.price}$</span>
        <button onClick={handleAddToCart} variant="success">
          Add to cart
        </button>
      </div>
    </div>
  );
}
