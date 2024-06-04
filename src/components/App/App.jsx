import React from "react";
import Header from "../Header/Header";
import AppRoutes from "../AppRoutes/AppRoutes";
import Footer from "../Footer/Footer";

import styles from "../../styles/app.module.scss";

const App = () => {
  return (
    <>
    <div className={styles.body}>     
      <Header />
      <div className={styles.container}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default App;
