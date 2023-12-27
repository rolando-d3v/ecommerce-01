import React from "react";
import css from "./layout.module.scss";
import { useSelector } from "react-redux";
import ItemCart from "../item_car/ItemCart";

export default function LayoutCarrito() {


    const cart = useSelector(state => state.CART_APP)

    console.log(cart);

  return (
    <div className={css.layout_carrito}  >
      <section  className={css.row_content}  >
        {cart?.list && cart?.list?.length > 0 ? (
          <table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {cart?.list.map((item) => {
                return <ItemCart key={item?.id} data={item} />;
              })}
              <tr style={{ fontSize: 20, textAlign: "right" }}>
                <td colSpan={3}>Total:</td>
                <td colSpan={1}>{cart?.total}$</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h1>Empty</h1>
        )}
      </section>
    </div>
  );
}
