import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
// import { apiDocumento } from "./apis/apiDocumento";


import baseStyleSlice from "./baseStyleSlice";
import perSisRolStyleSlice from "./perSisRolSlice";


export const store = configureStore({
  reducer: {

    baseStyle: baseStyleSlice,
    perSisRolStyle: perSisRolStyleSlice,
  }
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiDocumento.middleware),

});

setupListeners(store.dispatch);
