import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import createGroups from "../../../../utils/splitArrayIntoGroups";

SwiperCore.use([Pagination, Autoplay]);

const TrustedBy = ({ content }) => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>trusted by</h3>
          <div>
            <Swiper
              spaceBetween={2}
              slidesPerView={1}
              // pagination={pagination}
              // className={`swiper-wrapper home ${styles.slideWrapper}`}
              // className={` ${styles.slideWrapper}`}
              loop
              autoplay={{
                  delay:9000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".custom-pag1",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              {createGroups(content.sectionContents, 4).map((group, idx) => (
                <SwiperSlide key={idx}>
                  <div className={styles.slideGroup}>
                    {group.map((cti, id) => (
                      <div key={id} className={styles.slideItem}>
                        <div className={styles.slideArrow}>
                          <img
                            src="/images/left-arrow-circle.svg"
                            alt="arrow-left-circle"
                          />
                        </div>
                        <div className={styles.logoText}>
                          <img src={cti.contentHeading} alt={cti.contentHeading} />
                          <h6>{cti.contentImage}</h6>
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
