import React from "react";
import css from "./registroUser.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../api_ecommerce/apiAuthLogin";

export default function Registro() {


  // ? CREA REGISTRO USER ****************************************
  const mutationCreateUser = useMutation({
    mutationFn: createUser,
    // onSuccess: () => {
    //   queryClient.invalidateQueries("registro_externo_actual");
    // },
  });

  const schema = z
    .object({
      email: z.string().email({ message: "Ingresa un email Valido" }),
      password: z.string().min(1, { message: "El campo email es obligatorio" }),
      repitePassword: z.string().min(1, { message: "Password no coinciden" }),
      nombres: z.string().min(1, { message: "El campo email es obligatorio" }),
      apellidos: z
        .string()
        .min(1, { message: "El campo email es obligatorio" }),
    })
    .refine((data) => data.password === data.repitePassword, {
      message: "No coincide password",
      path: ["repitePassword"],
    });

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { campo: "prueba" },
    resolver: zodResolver(schema),
  });
  console.log(errors);

  const enviarDataRegistro = async (data) => {
    try {
      console.log(data);

      mutationCreateUser.mutate(data);
    } catch (error) {
      //hay que pulir esto

      console.log(error);
    }
  };

  return (
    <div className={css.registro}>
      <h1 className={css.title}>Crear cuenta</h1>

      <form
        className={css.form_registro}
        method="post"
        onSubmit={handleSubmit(enviarDataRegistro)}
      >
        <label className={css.label}>Nombres</label>
        <input
          type="text"
          {...register("nombres")}
          className={css.item_input}
          id="nombres"
        />
        {errors.nombres && <span>Falta campo nombre </span>}

        <label className={css.label}>Apellidos</label>
        <input
          type="text"
          {...register("apellidos")}
          className={css.item_input}
        />
        {errors.apellidos && <span>Falta campo apellidos </span>}

        <label className={css.label}>Email*</label>
        <input type="email" {...register("email")} className={css.item_input} />
        {errors.email && <span>Falta email </span>}

        <label className={css.label}>Password*</label>
        <input
          type="password"
          {...register("password")}
          className={css.item_input}
        />
        {errors.password && <span>Falta campo password </span>}

        <label className={css.label}>Confirm Password*</label>
        <input
          type="password"
          {...register("repitePassword")}
          className={css.item_input}
        />
        {errors.repitePassword && <span>Password no coinciden </span>}

        <input
          type="submit"
          value="Registrarse"
          className={css.item_input_submit}
        />

        <label className={css.label_obliga}>* Campos obligatorios</label>
      </form>
    </div>
  );
}
