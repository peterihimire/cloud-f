import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Navigation]);

const WhatWeDo = () => {
  return (
    <section className={styles.what}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>What We Do</h2>

          <div className={styles.carousel}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next1",
                prevEl: ".custom-prev1",
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div className={styles.contentHeader} data-count="03">
                      <h3>Discovery</h3>
                    </div>
                    <div className={styles.contentBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco aboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu <br /> <br /> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco aboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                      </p>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <img alt="" src="/images/whatwedo.png" loading="lazy" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div className={styles.contentHeader} data-count="03">
                      <h3>Discovery</h3>
                    </div>
                    <div className={styles.contentBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco aboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu <br /> <br /> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco aboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                      </p>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <img alt="" src="/images/whatwedo.png" loading="lazy" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-prev1">
              <i className="far fa-chevron-left"></i>
            </div>

            <div className="custom-next1">
              <i className="far fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhatWeDo;
