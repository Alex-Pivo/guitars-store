import React, { useEffect, useState, useRef } from "react";
import stylesGuitar from "../../styles/guitarProduct.module.scss";
import { guitars } from "../../guitars-data/guitars.data";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import styles from "../../styles/shop.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../components/Cart/CartContext";
import SliderGuitar from "../../components/SliderGuitar/SliderGuitar";

const GuitarProduct = () => {
  const { id } = useParams();
  const [guitar, setGuitar] = useState(null);
  let [cunt, setCunt] = useState(0);
  const { addToCart } = useCart();

  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    const foundGuitar = guitars.find((guitar) => guitar.id === parseInt(id));
    setGuitar(foundGuitar);
  }, [id]);

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.pages}>
          <Link className={styles.link} to={ROUTES.HOME}>
            Головна
          </Link>{" "}
          /{" "}
          <Link className={styles.link} to={ROUTES.GUITARS}>
            Магазин{" "}
          </Link>{" "}
          / {guitar ? guitar.name : "none"}
        </div>
        <div className={styles.container}>
          {guitar ? (
            <div className={stylesGuitar.product}>
              <div className={stylesGuitar.top}>
                <SliderGuitar guitar={guitar}></SliderGuitar>

                <div className={stylesGuitar.info}>
                  <h2 className={stylesGuitar.name}>{guitar.name}</h2>
                  <p className={stylesGuitar.text}>Виробник: {guitar.firm}</p>
                  <p className={stylesGuitar.text}>Наявність: {guitar.avail}</p>
                  <p className={stylesGuitar.text}>Код товару: {guitar.code}</p>

                  <p className={stylesGuitar.cost}>{guitar.cost} ₴</p>

                  <audio ref={audioRef} src={guitar.audio} />
                  <button
                    onClick={playAudio}
                    className={stylesGuitar.btn__play}
                  >
                    Послухати
                  </button>

                  <button
                    className={
                      guitar.avail === "Є в наявнсті"
                        ? stylesGuitar.btn
                        : stylesGuitar.btn_no
                    }
                    onClick={() => addToCart(guitar)}
                  >
                    Додати в кошик
                  </button>
                </div>
              </div>
              <div className={stylesGuitar.bottom}>
                <div className={stylesGuitar.btns}>
                  <button
                    className={
                      cunt === 0
                        ? stylesGuitar.cat_btn_active
                        : stylesGuitar.cat_btn
                    }
                    onClick={() => {
                      setCunt((cunt = 0));
                    }}
                  >
                    ІНФОРМАЦІЯ
                  </button>
                  <button
                    className={
                      cunt === 1
                        ? stylesGuitar.cat_btn_active
                        : stylesGuitar.cat_btn
                    }
                    onClick={() => {
                      setCunt((cunt = 1));
                    }}
                  >
                    ОГЛЯД
                  </button>
                </div>
                <div className={stylesGuitar.info__container}>
                  {cunt === 0 && (
                    <div className={stylesGuitar.haracteristics}>
                      <h3 clcassName={stylesGuitar.title}>Характеристики:</h3>
                      <p className={stylesGuitar.text}>{guitar.har}</p>
                    </div>
                  )}
                  {cunt === 1 && (
                    <div className={stylesGuitar.video__cont}>
                      <iframe
                        width="760"
                        height="515"
                        src={guitar.video}
                        className={styles.iframe}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p>Товар не знайдено :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GuitarProduct;
