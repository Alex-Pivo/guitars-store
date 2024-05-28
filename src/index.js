import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CartProvider } from "./components/Cart/CartContext";

import "./styles/index.css";

import App from "./components/App/App";
import { store } from "./features/store";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
