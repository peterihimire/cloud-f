import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination, Autoplay]);

const helpYou = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>Cloudfift Will Help You</h3>
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
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Create your product concept</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis turpis sagittis mollis cursus augue. Nibh
                        consectetur sed sit tincidunt dignissim. In congue
                        bibendum nisl lacus. Pharetra vitae nisi, id nunc,
                        donec. Sed posuere ut purus nunc, morbi arcu odio.
                        Iaculis a rhoncus aliquet scelerisque sapien,{" "}
                      </p>
                    </div>
                    <div className={styles.slideItemFooter}>
                      <h5>
                        How we help arnnex shaped their market data portal
                      </h5>
                      <div className={styles.learnMoreDiv}>
                        <div className={styles.learnMoreLink}>
                          <p>Learn more</p>
                          <span>
                            <img src="/images/right-circle-caret.svg" alt="" />
                          </span>
                        </div>

                        <img src="/images/aramex-logo.svg" alt="" />
                      </div>
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
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={styles.clientResults}>
        <h3>Client Results</h3>
        <div className={styles.countGrid}>
          <div className={styles.countItem}>
            <h2>52</h2>
            <p>Use case across 5 region</p>
          </div>

          <div className={styles.countItem}>
            <h2>200</h2>
            <p>Completed Projects</p>
          </div>

          <div className={styles.countItem}>
            <h2>5</h2>
            <p>Star ratings on app store</p>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default helpYou;
