import React from "react";
import css from "./pago.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SendPago() {

    const { auth, roles_user } = useSelector((state) => state.USER_AUTH);

    const navigate = useNavigate();
    const pagar = () => {
        console.log("pagos");
    
        if (!auth) {
          navigate("/login");
        }
    
        navigate("/user/pagos");
      };
  return (
    <aside className={css.aside}>
      <article className={css.content_aside}>
        <h4>Realizar Pagos</h4>
        <button type="button" onClick={pagar}>
          {" "}
          Pagar{" "}
        </button>
      </article>
    </aside>
  );
}
