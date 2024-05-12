import React, { useEffect } from "react";

import Header from "../Header/Header";
import AppRoutes from "../AppRoutes/AppRoutes";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

import styles from "../../styles/app.module.scss";
import { getGuitars } from "../../features/guitars/guitarsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitars());
  }, [dispatch])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AppRoutes />;
      </div>
      <Footer />
    </>
  );
};

export default App;
