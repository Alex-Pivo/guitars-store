import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes/routes,";
import { Canvas } from "@react-three/fiber";

import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import GuitarProduct from "../../pages/GuitarProduct/GuitarProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/guitars" element={<Shop />}></Route>
      <Route path={ROUTES.CATEGORY} element={
        <GuitarProduct />
      }>
        
      </Route>
      <Route index path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default AppRoutes;
