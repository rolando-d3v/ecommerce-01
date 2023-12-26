import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal_select: null,
  role_select: null,
  opciones_select: null,
  nivel3_select: null,
  nivel1_select: null,
  // auth: true,
  auth: null,
  // roles_user: ["user"],
  roles_user: [],
  dni: null,
  personal: null,
  sistema_role_opciones: null,
  default_nivel3: null || 0 ,
  default_nivel1: null || 0 ,
  default_role: null || 0 ,
  default_opciones: null || [] ,
  nivel3: [] ||  null,
  nivel1: null,
  sistema: 1,
};

export const usuarioSlice = createSlice({
  name: "usuarioAuthSlice",
  initialState,

  reducers: {
    login_true: (state, action) => {
      state.auth = action.payload;
    },
   
    login_false: (state, action) => {
      state.auth = null;
      sessionStorage.removeItem("TK")
    },
  },
});

export const {
  login_true,
  login_false,
  nivel1_nivel3,
  personal,
  xsistema_role_opciones,
  xselect,
  xdefault_nivel_3,
  xdefault_nivel_1,
  xdefault_role,
  xdefault_opciones
} = usuarioSlice.actions;

export default usuarioSlice.reducer;
