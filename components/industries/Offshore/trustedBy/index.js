import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination]);

const TrustedBy = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h4>Trusted by global enterprises and start-ups</h4>
          <div className={styles.carousel}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop
              // autoplay={{
              //     delay:9000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                el: ".custom-pag1",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-1.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-3.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-4.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag1"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default TrustedBy;
