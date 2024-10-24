import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "swiper/css";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routers/AppRoutes";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </Provider>
);
