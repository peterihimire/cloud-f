import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import createGroups from "../../../../utils/splitArrayIntoGroups";

SwiperCore.use([Pagination]);

const caseStudy = ({ wrapperClass, content }) => {
  return (
    <div
      className={`${styles.caseStudies} ${wrapperClass ? wrapperClass : ""}`}
    >
      <h2>{content.sectionHeading1}</h2>
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
          {createGroups(content.sectionContents, 3).map((gp, i) => (
            <SwiperSlide key={i}>
              <div className={styles.caseGrid}>
                {gp.map((cti, idx) => (
                  <div key={idx} className={styles.caseCard}>
                    <div className={styles.caseImg}>
                      <img loading="lazy" alt="" src={cti.contentImage} />
                    </div>
                    <div className={styles.caseContent}>
                      <h3>{cti.contentHeading}</h3>
                      <p>{cti.contentCtaText}</p>
                      <a href="/" className="btn-transparent">
                        View Case studies
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pag1"></div>
      </div>
    </div>
  );
};

export default caseStudy;
