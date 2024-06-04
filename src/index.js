import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/Cart/CartContext";

import "./styles/index.css";

import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
