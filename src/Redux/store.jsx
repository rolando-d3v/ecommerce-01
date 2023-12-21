import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";


import usuarioAuthSlice from "./usuarioAuthSlice";
import settingAppSlice from "./settingAppSlice";



export const store = configureStore({
  reducer: {

    SETTING_APP: settingAppSlice,
    USER_AUTH: usuarioAuthSlice,
  }
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiDocumento.middleware),

});

// setupListeners(store.dispatch);
