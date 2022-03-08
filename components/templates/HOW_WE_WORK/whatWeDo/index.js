import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const WhatWeDo = ({ content }) => {
  return (
    <section className={styles.what}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

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
            {content.sectionContents.map((ct, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div
                      className={styles.contentHeader}
                      data-count={`0${idx + 1}`}
                    >
                      <h3>{ct.contentHeading}</h3>
                    </div>
                    <div className={styles.contentBody}>
                      <p>{ct.contentSynopsis}</p>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <img alt="" src={ct.contentImage} loading="lazy" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev1">
            <i className="far fa-chevron-left"></i>
          </div>

          <div className="custom-next1">
            <i className="far fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
