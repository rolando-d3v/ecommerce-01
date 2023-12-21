import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  estado_sidebar: true,
  estado_modal: false,
  estado_modal_full: false,
  estado_modal_jefe: false,
  estado_url_doc: "",
  isDarkMode: localStorage.getItem("isDarkMode") === "true" ? true : false,
  // isDarkMode: Cookies.get('isDarkMode') === 'true' ? true : false,
};
// const initialState = () => {
//   return JSON.parse(localStorage.getItem("user")) || { logged: false };
// };



export const baseStyleSlice = createSlice({
  name: "baseStyle",
  initialState,

  reducers: {

    openToggleSidebar: (state, action) => {
      state.estado_sidebar = action.payload;
    },
    openModalBasex: (state, action) => {
      state.estado_modal = action.payload;
    },
    xopenModalFull: (state, action) => {
      state.estado_modal_full = action.payload;
    },
    xopenModalJefe: (state, action) => {
      state.estado_modal_jefe = action.payload;
    },
    url_docx: (state, action) => {
      state.estado_url_doc = action.payload;
    },
    toggleDarkMode: (state) => {
      const isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", isDarkMode);
      // Cookies.set('isDarkMode', isDarkMode)
      state.isDarkMode = isDarkMode;
    },
  },
});

export const {
  openToggleSidebar,
  openModalBasex,
  xopenModalFull,
  xopenModalJefe,
  url_docx,
  toggleDarkMode,
} = baseStyleSlice.actions;

export default baseStyleSlice.reducer;
