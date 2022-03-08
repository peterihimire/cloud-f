import React from "react";
import styles from "./styles.module.scss";
import Aramex from "../../../public/images/aramex.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])
const Companies = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
    
  };
  return (
    <section className={styles.companies}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>Join the company of these clients who trust our services.</h2>
          <Marquee direction="right" className="marqueecustom">
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-1.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-2.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-3.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-4.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-5.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-6.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-7.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/limpkin_1.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/vindoc_1.png"/>
              </div>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/CloudticianLogo.png"/>
              </div>
          </Marquee>
          {/* <Swiper
            spaceBetween={20}
            slidesPerView={5}
            pagination={pagination}
            className={`swiper-wrapper partner ${styles.slideWrapper}`}
            loop
            autoHeight={true}
            autoplay={true}
            autoplay={{
                delay:9000,
              disableOnInteraction: false,
            }}
            breakpoints= {{
              1024: {
                slidesPerView: 4,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            }}
            
          >
            <SwiperSlide>
              <div className={styles.partnerlogo}>
                <img src="/images/partner-logo/Asset-1.png"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-2.png"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-3.png"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-4.png"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-5.png"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-6.png"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/Asset-7.png"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/limpkin_1.png"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partnerlogo}>
              <img src="/images/partner-logo/vindoc_1.png"/>
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Companies;
