import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import GuitarProduct from "../../pages/GuitarProduct/GuitarProduct";
import Order from "../../pages/Order/Order";
import Connect from "../../pages/Connect/Connect";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path={ROUTES.GUITARS} element={<Shop />}></Route>
      <Route path={ROUTES.CATEGORY} element={<GuitarProduct />}></Route>
      <Route index path={ROUTES.ABOUT} element={<About />}></Route>
      <Route path={ROUTES.ORDER} element={<Order />}></Route>
      <Route index path={ROUTES.CONNECT} element={<Connect />}></Route>
    </Routes>
  );
};

export default AppRoutes;
