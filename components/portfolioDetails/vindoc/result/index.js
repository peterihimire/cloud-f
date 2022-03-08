import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination]);

const Result = () => {
  return (
    <section className={styles.result}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <p className={styles.leadPara}>THE RESULT</p>
        <div className={styles.lead}>
          <div className={styles.left}>
            <h2>
            Medical Consultation via Audio and Video Conferencing
            </h2>
          </div>
          <div className={styles.right}>
            <p>
            Patients are able to have their consultation (audio and video conferencing) from the comfort of their home or work
            </p>
          </div>
        </div>

        <div className={styles.carousel}>
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              el: ".custom-pag2",
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            className={`swiper-wrapper ${styles.slideWrapper}`}
          >
            <SwiperSlide>
              <div className={styles.card}>
                <img alt="" src="/images/pd7.png" />
                <img alt="" src="/images/pd8.png" />
                <img alt="" src="/images/pd9.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <img alt="" src="/images/pd7.png" />
                <img alt="" src="/images/pd8.png" />
                <img alt="" src="/images/pd9.png" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pag2"></div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Result;
