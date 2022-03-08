import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Icon1 from "../../../public/images/career4.svg";
import Icon2 from "../../../public/images/career5.svg";
import Icon3 from "../../../public/images/career6.svg";
import ScrollAnimation from 'react-animate-on-scroll';

SwiperCore.use([Pagination]);

const Connected = () => {
  return (
    <section className={styles.connected}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>Stay Connected</h2>

          <div className={styles.carousel}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
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
                <div className={styles.grid}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon1 />
                      <h3>Join Our Team</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>SEARCH CLOUFIFT JOBS</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon2 />
                      <h3>Keep UP to Date</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>READ CAREER INSIGHT</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon3 />
                      <h3>Job Alert Emails</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>REGISTER FOR JOBS ALERT</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.grid}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon1 />
                      <h3>Join Our Team</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>SEARCH CLOUFIFT JOBS</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon2 />
                      <h3>Keep UP to Date</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>READ CAREER INSIGHT</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <Icon3 />
                      <h3>Job Alert Emails</h3>
                    </div>
                    <div className={styles.cardBody}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At id consequat pellentesque volutpat dolor lorem maecenas
                        nullam lectus. Quis a eu, amet, adipiscing et at erat
                        aliquet.
                      </p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href="/">
                        <span>REGISTER FOR JOBS ALERT</span>
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag1" style={{ marginTop: "40px" }}></div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Connected;
