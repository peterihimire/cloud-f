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
            <h2>Make Pledges easily to Projects</h2>
          </div>
          <div className={styles.right}>
            <p>
              Users can track the pledges they have made and the progress of
              these projects, as well as how much has been made and the
              outstanding amount.
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
                <img alt="" src="/images/case-studies/kobofundme/fundme1.png" />
                <img alt="" src="/images/case-studies/kobofundme/fundme2.png" />
                <img alt="" src="/images/case-studies/kobofundme/fundme4.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <img alt="" src="/images/case-studies/kobofundme/fundme3.png" />
                <img alt="" src="/images/case-studies/kobofundme/fundme5.png" />
                <img alt="" src="/images/case-studies/kobofundme/fundme2.png" />
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
