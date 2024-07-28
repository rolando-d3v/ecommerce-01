import React from "react";
import css from "./layout.module.scss";
import { useSelector } from "react-redux";
import ItemCart from "../item_car/ItemCart";
import SendPago from "../send_pago/SendPago";

export default function LayoutCarrito() {
  const cart = useSelector((state) => state.CART_APP);

  console.log(cart);

  return (
    <div className={css.layout_carrito}>
      <section className={css.content_carrito}>
        {cart?.list && cart?.list?.length > 0 ? (
          <table className={css.table_com}>
            <thead className={css.table_head}>
              <tr>
                <th className={css.th_head}>Descripcion</th>
                <th className={css.th_head}>Precio</th>
                <th className={css.th_head}>Cantidad</th>
                <th className={css.th_head}>Sub total</th>
                <th className={css.th_head}>Accion</th>
              </tr>
            </thead>
            <tbody className={css.table_body}>
              {cart?.list.map((item) => {
                return <ItemCart key={item?.id} data={item} />;
              })}
              <tr className={css.total_price}>
                <td colSpan={3}>Total:</td>
                <td colSpan={1}> S/ {cart?.total} </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h1 className={css.content_noProductos}>
            No hay Productos en el Carrito
          </h1>
        )}
      </section>

      {/* <aside className={css.aside}>
        <article className={css.content_aside}>
          <h4>Realizar Pagos</h4>
          <button type="button" onClick={pagar}>
            {" "}
            Pagar{" "}
          </button>
        </article>
      </aside> */}

      <SendPago />
    </div>
  );
}
