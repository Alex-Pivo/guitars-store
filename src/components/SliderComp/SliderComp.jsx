import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade, Autoplay } from "swiper/modules";
import styles from "../../styles/slidercomp.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/effect-fade';
import "swiper/css/thumbs";

const SliderComp = () => {
  return (
    <>
      <div className={styles.swiper__container}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            backgroundColor: "#ffffff",
          }}
          effect={'fade'}
          spaceBetween={0}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div
              className={styles.img}
              style={{
                width: "100%",
                height: "100%",
                background: `url("/slider/fender.jpg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.shadow}>
                <h2>FENDER</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.img}
              style={{
                width: "100%",
                height: "100%",
                background: `url("/slider/dangelico.jpg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.shadow}>
                <h2>D'ANGELICO</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.img}
              style={{
                width: "100%",
                height: "100%",
                background: `url("/slider/les.jpg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.shadow}>
                <h2>LES PAUL</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.img}
              style={{
                width: "100%",
                height: "100%",
                background: `url("/slider/jackson.png")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.shadow}>
                <h2>JACKSON</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderComp;
