import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination, Autoplay]);

const OurTeam = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.trustedByTextDiv}`}>
            <h3>Our Team</h3>
            <div>
              <Swiper
                spaceBetween={2}
                slidesPerView={1}
                // pagination={pagination}
                // className={`swiper-wrapper home ${styles.slideWrapper}`}
                // className={` ${styles.slideWrapper}`}
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
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-1.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className={styles.slideItem}>
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-2.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className={styles.slideItem}>
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-3.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.slideGroup}>
                    <div className={styles.slideItem}>
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-3.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className={styles.slideItem}>
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-2.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className={styles.slideItem}>
                      <div className={styles.slideItemContent}>
                        <img src="/images/member-1.png" alt="" />
                      </div>
                      <div className={styles.slideItemFooter}>
                        <div className={styles.slideFooterHeader}>
                          <h4>Beauty Lane</h4>
                          <p>Product Manager</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <div className={styles.social}>
                          <img src="/images/fb-grey.svg" alt="" />
                          <img src="/images/tw-grey.svg" alt="" />
                          <img src="/images/in-grey.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-pag1"></div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default OurTeam;
