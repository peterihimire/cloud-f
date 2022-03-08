import React from "react";
// import { Link } from 'react-router';
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])
const OurWork = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className={styles.work}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.wrapper}>
          <div className={styles.lead}>
            <h2>Our Work</h2>
            {/* <p>Technology Pragmatists</p> */}
          </div>

          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            className={`swiper-wrapper home ${styles.slideWrapper}`}
            loop
            autoHeight={true}
            centeredSlides={true}
            autoplay={true}
            autoplay={{
                delay:9000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={styles.left}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
                <div className={styles.content}>
                  <div className={styles.contentWrapper} data-count="01">
                    {/* <h4>INCUBATED STARTUP</h4> */}
                    <h3>Seamless Software Design</h3>
                    <p>
                      Cloudfift specializes in transforming the software
                      infrastructure in your organisation. We do this by
                      thoroughly understanding your business requirements,
                      followed by critical planning and smooth implementation of a
                      diverse portfolio of services. Our highly tailored services
                      in-app, web and miscellaneous software development help
                      smoothen your systems, streamline your data and enhance your
                      decision-making.
                    </p>
                      {/* <Link to="/how-we-work"> */}
                        <a href="/how-we-work">
                          <span className={styles.arrow}>
                            <i className="far fa-arrow-right"></i>
                          </span>
                          <span>THE CASE STUDY</span>
                          </a>
                      {/* </Link> */}
                  </div>
                </div>
                <div className={styles.right}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={styles.left}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
                <div className={styles.content}>
                  <div className={styles.contentWrapper} data-count="02">
                    {/* <h4>INCUBATED STARTUP</h4> */}
                    <h3>Interactive & Engaging Consultations</h3>
                    <p>
                      Our dedicated and trained team of experts help provide a
                      hassle-free and memorable software development consultation
                      experience to all organisations stepping foot in the world
                      of software design for the first time. We guide, educate and
                      pioneer key design decisions within our client's businesses,
                      to render maximum leverage. The mandate of our consultants
                      is to ensure that your businesses make profits and cut costs
                      in a hassle-free and enjoyable manner.
                    </p>
                    <a href="/how-we-work">
                      <span className={styles.arrow}>
                        <i className="far fa-arrow-right"></i>
                      </span>
                      <span>THE CASE STUDY</span>
                    </a>
                  </div>
                </div>
                <div className={styles.right}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={styles.left}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
                <div className={styles.content}>
                  <div className={styles.contentWrapper} data-count="03">
                    {/* <h4>INCUBATED STARTUP</h4> */}
                    <h3>Dedicated Services & Support</h3>
                    <p>
                      At Cloudfift we believe in advancing our services far and
                      beyond the client's requirements. We help you settle nicely
                      in the intricate environment of software designing. Our
                      services are fostered to ensure you feel safe and supported
                      by our expertise at all times. We help you in drafting
                      policies and making decisions that change the face of your
                      IT landscape. <br />
                      Even after your organisation has leveraged the software
                      benefits, we will hold you by the hand, and give our
                      extended support in all your future endeavours.
                    </p>
                    <a href="/how-we-work">
                      <span className={styles.arrow}>
                        <i className="far fa-arrow-right"></i>
                      </span>
                      <span>THE CASE STUDY</span>
                    </a>
                  </div>
                </div>
                <div className={styles.right}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={styles.left}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
                <div className={styles.content}>
                  <div className={styles.contentWrapper} data-count="04">
                    {/* <h4>INCUBATED STARTUP</h4> */}
                    <h3>Assorted Services</h3>
                    <p>
                      Software development is an ever-evolving, multi-disciplinary
                      and ever-unfolding world of opportunities. We at Cloudfift,
                      understand this perfectly. We hence offer a diverse range of
                      services under a single umbrella. Whether your organisation
                      wants to implement a fresh web design or a standard project
                      to enhance software security, we've got you covered every
                      step along the journey. There are always avenues where your
                      business could use some external know-how, and that is where
                      Cloudfift will cater to all your needs.
                    </p>
                    <a href="/how-we-work">
                      <span className={styles.arrow}>
                        <i className="far fa-arrow-right"></i>
                      </span>
                      <span>THE CASE STUDY</span>
                    </a>
                  </div>
                </div>
                <div className={styles.right}>
                  <img alt="" src="/images/landing-carousel.png" loading="lazy" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default OurWork;
