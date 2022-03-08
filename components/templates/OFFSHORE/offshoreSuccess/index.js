import React from "react";
import styles from "./styles.module.scss";
// import Link from "next/dist/client/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import createGroups from "../../../../utils/splitArrayIntoGroups";

SwiperCore.use([Pagination, Autoplay]);

const OffshoreSuccess = ({ content }) => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>{content.sectionHeading1}</h3>
          <div>
            <Swiper
              spaceBetween={2}
              slidesPerView={1}
              loop
              // autoplay={{
              //     delay:9000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                el: ".custom-pag3",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              {createGroups(content.sectionContents, 3).map((grp, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.slideGroup}>
                    {grp.map((cti, idx) => (
                      <div key={idx} className={styles.slideItem}>
                        <div className={styles.logoText}>
                          <img src={cti.contentImage} alt="arrow-left-circle" />
                          <div className={styles.hoverInfo}>
                            <h3>{cti.contentHeading}</h3>
                            <p>{cti.contentSynopsis}</p>
                            <a
                              href={cti.contentCtaUrl}
                              className="btn-transparent btn-medium"
                            >
                              {cti.contentCtaText}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pag3"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default OffshoreSuccess;
