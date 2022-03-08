import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination, Autoplay]);

const NearshoreService = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h4>Our Nearshore Software Development Service</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,.
          </p>
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
                el: ".custom-pag4",
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
                    <div className={styles.logoText}>
                      <img
                        src="/images/cloud-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Cloud Migration</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/security-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Security</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/quality-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Quality Assurance</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/support-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Support</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/cloud-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Cloud Migration</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/security-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Security</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/quality-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Quality Assurance</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/support-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Support</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/cloud-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Cloud Migration</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/security-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Security</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/quality-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Quality Assurance</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img
                        src="/images/support-icon.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Support</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag4"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default NearshoreService;
