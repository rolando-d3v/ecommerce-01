import React from "react";
import css from "./layoutLogin.module.scss";
import Login from "../login_user/Login";
import Registro from "../registro_auth/Registro";

export default function LayoutLogin() {
  return (
    <div className={css.login_registro}>
      <section className={css.div_login_registro}>
        <Login />
        <Registro />
      </section>
    </div>
  );
}
