import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from "../../styles/guitarProduct.module.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SliderGuitar = ({guitar}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  let imagesAr = guitar.images;

  return (
    <>
    <div className={styles.swiper__container}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          backgroundColor: "#ffffff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperTop}
      >
         {imagesAr.map((image, index) => (
            <SwiperSlide>
            <div 
                key={index}            
                className={styles.img}
                style={{
                    width: "100%",
                    height: "100%",
                    background: `url("${image}")`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </SwiperSlide>
         ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperBottom}
      >
        {imagesAr.map((image, index) => (
            <SwiperSlide>
            <div 
                key={index}            
                className={styles.img}
                style={{
                    width: "100%",
                    height: "100%",
                    background: `url("${image}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </SwiperSlide>
         ))}
      </Swiper>
    </div>
    </>
  );
}

export default SliderGuitar;