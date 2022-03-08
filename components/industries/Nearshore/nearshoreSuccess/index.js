import React from "react";
import styles from "./styles.module.scss";
// import Link from "next/dist/client/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination, Autoplay]);

const NearshoreSuccess = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>Cloudfift Nearshore Development Success</h3>
          <div>
            <Swiper
              spaceBetween={2}
              slidesPerView={1}
              loop
              // autoplay={{
              //     delay:9000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                el: ".custom-pag3",
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
                      <img src="/images/desk-one.png" alt="arrow-left-circle" />
                      <div className={styles.hoverInfo}>
                        <h3>Insurance App</h3>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam{" "}
                        </p>
                        <a href="/" className="btn-transparent btn-medium">
                          View Case studies
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img src="/images/desk-two.png" alt="arrow-left-circle" />
                      <div className={styles.hoverInfo}>
                        <h3>Insurance App</h3>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam{" "}
                        </p>
                        <a href="/" className="btn-transparent btn-medium">
                          View Case studies
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img src="/images/desk-one.png" alt="arrow-left-circle" />
                      <div className={styles.hoverInfo}>
                        <h3>Insurance App</h3>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam{" "}
                        </p>
                        <a href="/" className="btn-transparent btn-medium">
                          View Case studies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img src="/images/desk-two.png" alt="arrow-left-circle" />
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img src="/images/desk-one.png" alt="arrow-left-circle" />
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.logoText}>
                      <img src="/images/desk-two.png" alt="arrow-left-circle" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag3"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default NearshoreSuccess;
