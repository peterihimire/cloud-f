import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const caseStudy = ({ wrapperClass, heading }) => {
  return (
    <div
      className={`${styles.caseStudies} ${wrapperClass ? wrapperClass : ""}`}
    >
      <h2>{heading}</h2>
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
            <div className={styles.caseGrid}>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img loading="lazy" alt="" src="/images/tech3.png" />
                </div>
                <div className={styles.caseContent}>
                  <h3>Timbo App</h3>
                  <p>
                    Timbo is an app that is designed to help users communicate
                    freely via text, audio, and video calls. It is private and
                    business-friendly
                  </p>
                  <a href="/portfolio/timbo" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img
                    loading="lazy"
                    alt=""
                    src="/images/case-studies/kobofundme/fundme1.png"
                  />
                </div>
                <div className={styles.caseContent}>
                  <h3>KoboFundMe App</h3>
                  <p>
                    KoboFundMe is a crowdfunding app that is designed to help
                    users raise fund for their projects. The application enables
                    users to upload project
                  </p>
                  <a href="/portfolio/kobofundme" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img
                    loading="lazy"
                    alt=""
                    src="/images/case-studies/kobotree/2-copy-1.jpeg"
                  />
                </div>
                <div className={styles.caseContent}>
                  <h3>KoboTree App</h3>
                  <p>
                    KoboTree is a real estate investment app that is designed to
                    help users grow their finances through investment that
                    guarantees return
                  </p>
                  <a href="/portfolio/kobotree" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.caseGrid}>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img loading="lazy" alt="" src="/images/tech3.png" />
                </div>
                <div className={styles.caseContent}>
                  <h3>Limpkin App</h3>
                  <p>
                    Limpkin is a social media app that is designed to help users
                    share images and videos from memorable moments. It is
                    private and business-friendly
                  </p>
                  <a href="/portfolio/limpkin" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img
                    loading="lazy"
                    alt=""
                    src="/images/case-studies/cloudticians/cloudtician1.jpeg"
                  />
                </div>
                <div className={styles.caseContent}>
                  <h3>Cloudtician App</h3>
                  <p>
                    Cloudtician is an online training platform for people
                    interested in Information Technology. Most of the courses
                    offered prepare students to
                  </p>
                  <a href="/portfolio/cloudticians" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseImg}>
                  <img loading="lazy" alt="" src="/images/tech3.png" />
                </div>
                <div className={styles.caseContent}>
                  <h3>VinDoc App</h3>
                  <p>
                    Vindoc is a telemedicine application that allows
                    clients/patients to carry out online consultation with
                    expert physicians around
                  </p>
                  <a href="/portfolio/vindoc" className="btn-transparent">
                    View Case studies
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-pag1"></div>
      </div>
    </div>
  );
};

export default caseStudy;
