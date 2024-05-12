import React, { useEffect, useState } from "react";
import stylesGuitar from "../../styles/guitarProduct.module.scss";

import { guitars } from "../../guitars-data/guitars.data";
import { useParams } from "react-router-dom";

import { ROUTES } from "../../routes/routes,";
import styles from "../../styles/shop.module.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import { useCart } from "../../components/Cart/CartContext";

import SliderGuitar from "../../components/SliderGuitar/SliderGuitar";

const GuitarProduct = () => {
  const { id } = useParams();
  const [guitarsAr, setGuitarsAr] = useState([]);
  const [guitar, setGuitar] = useState(null);
  let [cunt, setCunt] = useState(0);

  const { addToCart } = useCart();

  useEffect(() => {
    // Находим товар по его id
    const foundGuitar = guitars.find((guitar) => guitar.id === parseInt(id));
    setGuitar(foundGuitar);
  }, [id]);

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.pages}>
          <Link className={styles.link} to={ROUTES.HOME}>
            Home
          </Link>{" "}
          /{" "}
          <Link className={styles.link} to={ROUTES.GUITARS}>
            Guitars{" "}
          </Link>{" "}
          / {guitar ? guitar.name : "none"}
        </div>
        <div className={styles.container}>
          <Sidebar></Sidebar>

          {guitar ? (
            <div className={stylesGuitar.product}>
              <div className={stylesGuitar.top}>
                <SliderGuitar guitar={guitar}></SliderGuitar>

                <div className={stylesGuitar.info}>
                  <h2 className={stylesGuitar.name}>{guitar.name}</h2>
                  <p className={stylesGuitar.cost}>{guitar.cost}</p>

                  <button className={stylesGuitar.btn__play}>Послухати</button>

                  <button className={stylesGuitar.btn}
                  onClick={() => addToCart(guitar)}
                  >Додати в кошик</button>
                </div>
              </div>

              <div className={stylesGuitar.bottom}>
                  <div className={stylesGuitar.btns}>
                    <button className={ cunt === 0 ? stylesGuitar.cat_btn_active : stylesGuitar.cat_btn}
                    onClick={()=>{
                      setCunt(cunt  = 0)
                    }}
                    >ІНФОРМАЦІЯ</button>
                    <button className={ cunt === 1 ? stylesGuitar.cat_btn_active : stylesGuitar.cat_btn}
                    onClick={()=>{
                      setCunt(cunt  = 1)
                    }}
                    >ОБЗОР</button>
                    <button className={ cunt === 2 ? stylesGuitar.cat_btn_active : stylesGuitar.cat_btn}
                    onClick={()=>{
                      setCunt(cunt  = 2)
                    }}
                    >3D МОДЕЛЬ</button>
                  </div>
                  
                  <div className={stylesGuitar.info__container}></div>
              </div>
            </div>
          ) : (
            <p>Товар не найден</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GuitarProduct;
