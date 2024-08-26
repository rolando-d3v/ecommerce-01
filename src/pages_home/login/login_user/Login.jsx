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
import { authLogin } from "../../../api_ecommerce/apiAuthLogin";
import { useMutation } from "@tanstack/react-query";
import { API_ECO } from "../../../api_ecommerce/apiRest";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  // ? LOGIN AUTH ****************************************
  const mutationLogin = useMutation({
    mutationFn: authLogin,
    // onSuccess: () => {
    //   queryClient.invalidateQueries("registro_externo_actual");
    // },
    onSuccess: async (data) => {
      sessionStorage.setItem("TK_ECO", JSON.stringify(data.token));
      dispatch(xlogin_true(true));
      console.log(data);
      
      const dataPersona = await axios.get(`${API_ECO}/user/role/${data.uuid} `);
      
      console.log(dataPersona.data);
      console.log(dataPersona.data.role_id);
      
      dispatch(xroles_user([dataPersona.data.role_id]));
      dispatch(xpersonal(dataPersona.data));

      

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
      
        dataPersona.data.role_id === 2
          ? navigate("/admin/productos")
          : navigate("/user/pagos");
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
    // defaultValues: { role: "admin", nombre: "rolando" },
    defaultValues: { role: "user", nombre: "rolando" },
    resolver: zodResolver(schema),
  });
  console.log(errors);

  const dispatch = useDispatch();

  const enviarData = (data) => {
    mutationLogin.mutate(data);
    console.log(data.role);
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
