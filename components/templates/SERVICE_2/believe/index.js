import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Believe = ({ content }) => {
  return (
    <section className={styles.believe}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content[0].sectionHeading1}</h2>
        <div className={styles.belief}>
          <div className={styles.left}>
            <p>{content[0].sectionSynopsis}</p>
          </div>
          <div className={styles.right}>
            <img alt="" src={content[0].sectionImage} loading="lazy" />
          </div>
        </div>

        <div className={styles.mgtWords}>
          <h3>INCLUSION & DIVERSITY</h3>
          <h4>{content[1].sectionHeading1}</h4>

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
                    <img alt="" src={content[1].sectionImage} loading="lazy" />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <p>{content[1].sectionSynopsis}</p>
                    </div>
                    {/* <div className={styles.cardFooter}>
                      <span>Lucky Onoriode</span>
                      <span>CEO, Admin Alliance</span>
                    </div> */}
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
      </div>
    </section>
  );
};

export default Believe;
