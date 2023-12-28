import React from "react";
import css from "./layout.module.scss";
import { useSelector } from "react-redux";
import ItemCart from "../item_car/ItemCart";
import { useNavigate } from "react-router-dom";

export default function LayoutCarrito() {
  const cart = useSelector((state) => state.CART_APP);

  const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

  console.log(cart);

  const navigate = useNavigate();

  const pagar = () => {
    console.log("pagos");

    if (!auth) {
      navigate("/login");
    }

    navigate("/user/pagos");
  };

  return (
    <div className={css.layout_carrito}>
      <section className={css.content_carrito}>
        {cart?.list && cart?.list?.length > 0 ? (
          <table className={css.table_com}>
            <thead className={css.table_head}>
              <tr>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody className={css.table_body}>
              {cart?.list.map((item) => {
                return <ItemCart key={item?.id} data={item} />;
              })}
              <tr className={css.total_price}>
                <td colSpan={3}>Total:</td>
                <td colSpan={1}>{cart?.total}$</td>
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

      <aside className={css.aside}>
        <article className={css.content_aside}>
          <h4>Realizar Pagos</h4>
          <button type="button" onClick={pagar}>
            {" "}
            Pagar{" "}
          </button>
        </article>
      </aside>
    </div>
  );
}
