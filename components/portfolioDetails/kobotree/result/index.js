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
            <h2>Earn Referral Earnings</h2>
          </div>
          <div className={styles.right}>
            <p>
              Users are able to earn and withdraw referral earnings on Kobotree.
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
                <img alt=""  src="/images/case-studies/kobotree/S21_Mockup_8_ copy.jpeg" />
                <img alt=""  src="/images/case-studies/kobotree/S21_Mockup_16_ copy.jpeg" />
                <img alt=""  src="/images/case-studies/kobotree/2-copy-1.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <img alt=""  src="/images/case-studies/kobotree/2-copy-2.jpeg" />
                <img alt=""  src="/images/case-studies/kobotree/2-copy-3.jpeg" />
                <img alt=""  src="/images/case-studies/kobotree/S21_Mockup_2_ copy.jpeg" />
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
