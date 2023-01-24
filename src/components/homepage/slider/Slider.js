import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.css'
import image1 from '../../../images/slide1.jpg'
import image2 from '../../../images/slide2.jpg'
import image3 from '../../../images/slide3.jpg'
import image4 from '../../../images/slide4.jpg'
import image5 from '../../../images/slide5.jpg'
import image6 from '../../../images/slide6.jpg'
import image7 from '../../../images/slide7.jpg'
import image8 from '../../../images/slide8.jpg'
import image9 from '../../../images/slide9.jpg'
import image10 from '../../../images/slide10.jpg'
import image11 from '../../../images/slide11.jpg'
import image12 from '../../../images/slide12.jpg'
import image13 from '../../../images/slide13.jpg'
import image14 from '../../../images/slide14.jpg'
import image15 from '../../../images/slide15.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Slider = () => {
    return(
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image6} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image7} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image8} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image9} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image10} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image11} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image12} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image13} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image14} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image15} alt="slide-image" className={styles.image}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;