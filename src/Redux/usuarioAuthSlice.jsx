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
    personal: (state, action) => {
      state.personal = action.payload;
      state.dni = action.payload.ID_DNI_C;
    },
    xsistema_role_opciones: (state, action) => {
      state.sistema_role_opciones = action.payload;
    },
    nivel1_nivel3: (state, action) => {
      state.nivel1 = action.payload.ARRAY_NIVEL1;
      state.nivel3 = action.payload.ARRAY_NIVEL3;
    },

    login_true: (state, action) => {
      state.auth = action.payload;
    },

    xdefault_nivel_3: (state, action) => {
      state.default_nivel3 = action.payload;
    },
    xdefault_nivel_1: (state, action) => {
      state.default_nivel1 = action.payload;
    },
    xdefault_role: (state, action) => {
      state.default_role = action.payload;
    },
    xdefault_opciones: (state, action) => {
      state.default_opciones = action.payload;
    },
    xselect: (state, action) => {
      state.personal_select = action.payload.personal;
      state.role_select = action.payload.role;
      state.opciones_select = action.payload.arrayOpciones;
      state.nivel3_select = action.payload.nivel3;
      state.nivel1_select = action.payload.nivel1;
    },

    login_false: (state, action) => {
      state.auth = null;
      state.personal = null;
      state.nivel3 = null;
      state.nivel1 = null;
      state.sistema_role_opciones = null;
    
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
