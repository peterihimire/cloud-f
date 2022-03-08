import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import createGroups from "../../../../utils/splitArrayIntoGroups";

SwiperCore.use([Pagination, Autoplay]);

const OffshoreService = ({ content }) => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.trustedByTextDiv}`}>
          <h4>{content.sectionHeading1}</h4>
          <p>{content.sectionSynopsis}</p>
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
              {createGroups(content.sectionContents, 4).map((grp, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.slideGroup}>
                    {grp.map((cti, idx) => (
                      <div key={idx} className={styles.slideItem}>
                        <div className={styles.logoText}>
                          <img src={cti.contentIcon} alt="arrow-left-circle" />
                          <h6>{cti.contentHeading}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pag4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreService;
