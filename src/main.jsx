import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import 'swiper/css';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
