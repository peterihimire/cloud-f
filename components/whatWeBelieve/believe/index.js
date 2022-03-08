import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Navigation]);

const Believe = () => {
  return (
    <section className={styles.believe}>
      <div className={`${styles.wrapper} wrapper`}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <h2>What We Believe</h2>
        <div className={styles.belief}>
          <div className={styles.left}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt <br />
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt s. <br /> <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt <br />
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt <br /> <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt <br />
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt <br />
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt
            </p>
          </div>
          <div className={styles.right}>
            <img alt="" src="/images/believe1.png" loading="lazy" />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.mgtWords}>
          <h3>INCLUSION & DIVERSITY</h3>
          <h4>In our managements’ words</h4>

          <div className={styles.carousel}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next2",
                prevEl: ".custom-prev2",
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img alt="" src="/images/believe2.png" loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className={styles.carouselNav}>
              <div className="custom-prev2">
                <img alt="" src="/images/left1.svg" />
              </div>

              <div className="custom-next2">
                <img alt="" src="/images/right1.svg" />
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Believe;
