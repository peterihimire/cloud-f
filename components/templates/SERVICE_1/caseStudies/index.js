import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const CaseStudies = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          {/* <h3>Cloudfift Will Help You</h3> */}
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
                el: ".custom-pag2",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <div className={styles.slideItemLeft}>
                    <h5>Kobotree</h5>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt do amet
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt s. Amet minim mollit
                      non deserunt ullamco est sit aliqua doloramet sint. Velit
                      officia consequat duis enim velit mollit. Exercitation
                      veniam consequat sunt do amet sint. Velit officia
                      consequat duis enim velit mollit. Exercitation v
                    </p>
                    <a href="/" className="btn-transparent btn-medium">
                      View Casestudy
                    </a>
                  </div>
                  <div className={styles.slideItemRight}>
                    <img src="/images/service-2.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <div className={styles.slideItemLeft}>
                    <h5>Timbo</h5>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt do amet
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt s. Amet minim mollit
                      non deserunt ullamco est sit aliqua doloramet sint. Velit
                      officia consequat duis enim velit mollit. Exercitation
                      veniam consequat sunt do amet sint. Velit officia
                      consequat duis enim velit mollit. Exercitation v
                    </p>
                    <a href="/" className="btn-transparent btn-medium">
                      View Casestudy
                    </a>
                  </div>
                  <div className={styles.slideItemRight}>
                    <img src="/images/service-2.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <div className={styles.slideItemLeft}>
                    <h5>Vindoc</h5>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt do amet
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt s. Amet minim mollit
                      non deserunt ullamco est sit aliqua doloramet sint. Velit
                      officia consequat duis enim velit mollit. Exercitation
                      veniam consequat sunt do amet sint. Velit officia
                      consequat duis enim velit mollit. Exercitation v
                    </p>
                    <a href="/" className="btn-transparent btn-medium">
                      View Casestudy
                    </a>
                  </div>
                  <div className={styles.slideItemRight}>
                    <img src="/images/service-2.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
