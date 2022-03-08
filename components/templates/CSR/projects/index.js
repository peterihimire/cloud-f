import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Projects = ({ content }) => {
  return (
    <section className={styles.projects}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

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
          className={`swiper-wrapper ${styles.slideWrapper}`}
        >
          <SwiperSlide>
            <div className={styles.grid}>
              {content.sectionContents.map((ct, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img alt="" src={ct.contentImage} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{ct.contentHeading}</h3>
                    <p>{ct.contentSynopsis}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-pag1"></div>
      </div>
    </section>
  );
};

export default Projects;
