import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import createGroups from "../../../../utils/splitArrayIntoGroups";

SwiperCore.use([Pagination]);

const TrustedBy = ({ content }) => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h4>{content.sectionHeading1}</h4>
          <div className={styles.carousel}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
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
              {createGroups(content.sectionContents, 4).map((grp, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.slideGroup}>
                    {grp.map((cti, idx) => (
                      <div key={idx} className={styles.slideItem}>
                        <div className={styles.slideArrow}>
                          <img
                            src="/images/left-arrow-circle.svg"
                            alt="arrow-left-circle"
                          />
                        </div>
                        <div className={styles.logoText}>
                          <img
                            src={cti.contentImage}
                            alt={cti.contentHeading}
                            height={50}
                          />
                          <h6>{cti.contentHeading}</h6>
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
        {/* </div> */}
      </div>
    </section>
  );
};

export default TrustedBy;
