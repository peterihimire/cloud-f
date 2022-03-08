import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])
const Projects = () => {
  return (
    <section className={styles.projects}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>Projects</h2>

          <Swiper
            spaceBetween={46}
            slidesPerView={1}
            pagination={{
              el: ".custom-pag1",
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            autoplay={true}
            autoplay={{
                delay:9000,
              disableOnInteraction: false,
            }}
            className={`swiper-wrapper ${styles.slideWrapper}`}
          >
            <SwiperSlide>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>Reach Out In Chicago</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>School reach Out In Chicago</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>Reach Out In Chicago</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>School reach Out In Chicago</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src="/images/csr3.png" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio cras nunc, ut sapien sapien, pretium aenean. A odio
                      enim sed dui nisi ac. Aliquam dolor Write email to u
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pag1"></div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
