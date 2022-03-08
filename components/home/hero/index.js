import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])
const HomeHero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <>
    {/* <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h1>Cloudfift</h1>
          <p>
            We at Cloudfift believe in being the driving force of your
            organisation's digital transformation. Our state-of-the-art cloud
            consultation services enable your businesses to thrive in the
            ever-evolving, the competitive and vulnerable world of information
            technology.
          </p>
          <a href="/contact-us" className="btn-transparent btn-medium">
            Shoot Us A Message
          </a>
        </div>
        <div className={styles.buttonGroup}>
          <button>01</button>
          <button>02</button>
          <button>03</button>
        </div>
      </ScrollAnimation>
    </section> */}
    
    <div className={`${styles.videoSection} videosection `} >
      <video loop="true" autoplay="true" >
          <source src="images/Homepage-video.mp4" type="video/mp4"/>
      </video>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        className={`swiper-wrapper video ${styles.slideWrappervideo}`}
        loop
        autoHeight={true}
        centeredSlides={true}
        autoplay={true}
        autoplay={{
            delay:13000,
          disableOnInteraction: false,
        }}
        >
        <SwiperSlide>
          <div className={styles.slideItem}>
          <h1>Cloudfift</h1>
          <p>
            We at Cloudfift believe in being the driving force of your
            organisation's digital transformation. Our state-of-the-art cloud
            consultation services enable your businesses to thrive in the
            ever-evolving, the competitive and vulnerable world of information
            technology.
          </p>
          <a href="/contact-us" className="btn-transparent btn-medium">
            Shoot Us A Message
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem}>
          <h1>Cloudfift</h1>
          <p>
            We at Cloudfift believe in being the driving force of your
            organisation's digital transformation. Our state-of-the-art cloud
            consultation services enable your businesses to thrive in the
            ever-evolving, the competitive and vulnerable world of information
            technology.
          </p>
          <a href="/contact-us" className="btn-transparent btn-medium">
            Shoot Us A Message
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem}>
          <h1>Cloudfift</h1>
          <p>
            We at Cloudfift believe in being the driving force of your
            organisation's digital transformation. Our state-of-the-art cloud
            consultation services enable your businesses to thrive in the
            ever-evolving, the competitive and vulnerable world of information
            technology.
          </p>
          <a href="/contact-us" className="btn-transparent btn-medium">
            Shoot Us A Message
          </a>
          </div>
        </SwiperSlide>
        </Swiper>
    </div>
</>
  );
};

export default HomeHero;
