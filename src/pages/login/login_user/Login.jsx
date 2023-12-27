import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import css from "./loginUser.module.scss";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import {
  xlogin_true,
  xpersonal,
  xroles_user,
} from "../../../Redux/usuarioAuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "El campo email es obligatorio" })
      .email({ message: "Ingresa un email Valido" }),
    password: z
      .string()
      .min(1, { message: "El campo password es obligatorio" }),
    role: z.string().min(1, { message: "El campo email es obligatorio" }),
    nombre: z.string().min(1, { message: "El campo email es obligatorio" }),
  });

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    // defaultValues: { role: "admin" },
    defaultValues: { role: "user", nombre: "rolando" },
    resolver: zodResolver(schema),
  });
  console.log(errors);

  const dispatch = useDispatch();

  const enviarData = (data) => {
    // const role = "user";

    console.log(data.role);
    console.log(data);

    sessionStorage.setItem("TK_ECO", JSON.stringify(data));

    dispatch(xlogin_true(true));
    dispatch(xpersonal(data));
    dispatch(xroles_user([`${data.role}`]));



    toast("Login", {
      className: "my-classname",
      description: "Exitoso",
      duration: 1500,
      position: "top-center",
      style: {
        background: "#000",
        color: "white",
      },
      // icon: <MyIcon />,
    });

    {
      data.role === "admin"
        ? navigate("/admin/productos")
        : navigate("/user/pagos");
    }
  };

  return (
    <form
      method="post"
      className={css.login}
      onSubmit={handleSubmit(enviarData)}
    >
      <h1 className={css.title}>Login</h1>

      <label className={css.label}>Email</label>
      <input type="email" {...register("email")} className={css.item_input} />

      {errors.email && <span>email es requerido </span>}

      <label className={css.label}>Password</label>
      <input
        type="password"
        {...register("password")}
        className={css.item_input}
      />

      {errors.password && <span>Password es requerido </span>}

      <input type="submit" className={css.item_input_submit} />

      {/* <a href="#recover">Recupera Contraseña</a> */}
    </form>
  );
}
