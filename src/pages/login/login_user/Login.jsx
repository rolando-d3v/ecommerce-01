import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import css from "./loginUser.module.scss";

export default function Login() {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "El campo email es obligatorio" })
      .email({ message: "Ingresa un email Valido" }),
    password: z
      .string()
      .min(1, { message: "El campo password es obligatorio" }),
    campo: z.string().min(1, { message: "El campo email es obligatorio" }),
  });

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { campo: "prueba2023" },
    resolver: zodResolver(schema),
  });
  console.log(errors);

  const enviarData = (data) => {
    console.log(data);
  };

  return (
    <form
      method="post"
      className={css.login}
      onSubmit={handleSubmit(enviarData)}
    >
      <h1 className={css.title}>Login</h1>

      <label className={css.label}>Email</label>
      <input
        type="email"
        {...register("email")}
        
        className={css.item_input}
      />

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
