import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const HelpYou = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>Cloudfift Will Help You</h3>
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
                el: ".custom-pag1",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 1: Understanding your requirements</h5>
                      <p>
                        Our team of experts hold meetings with your organisation
                        and understand your requirements completely. In this
                        stage, we only listen to you and don't offer any upfront
                        advice or consultation. We encourage our clients to open
                        up to us completely and be transparent, lucid and frank
                        in communicating their requirements. Based upon the
                        requirements requested by the clients, we create an
                        initial specification document that has a detailed list
                        of the goals and mandate of your organisation, and what
                        exactly you are looking to achieve. This is the first
                        part of our larger assessment strategy to understand
                        your needs.
                      </p>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 2: Analyzing your organisation</h5>
                      <p>
                        In this stage, we analyze your organisations IT
                        infrastructure in and out. We try to understand the
                        focal points of your organisation, the weaker links, the
                        strengths, weaknesses, threats and opportunities. This
                        is done by comprehensively going through your financial
                        documents, previous year projections, future
                        projections, company structure and your existing
                        infrastructure. This is an important part of
                        understanding the nature of the work you do and the
                        services you extend to clients. It lays the foundation
                        for our consultation services and helps us ascertain the
                        exact needs of your organisation.
                      </p>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 3: Consultation</h5>
                      <p>
                        In this stage, we give you professional consultations.
                        We come up with a blueprint that is in line with all
                        your specifications and offers a comprehensive solution
                        to your existing problems/needs. We put in front of you,
                        a range of services that are available in that
                        particular domain, and together we choose the one that
                        best fits your organisational capacity and demand.
                        Sometimes, we offer a blueprint which is a combination
                        of services that are tailored to suit your exact
                        requirements and are a viable solution in the longer
                        run. The agenda of our consultations is to extend the
                        most feasible service for your organisation ensuring the
                        minimization of costs and maximization of profits.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 4: Planning</h5>
                      <p>
                        After the blueprint is drafted and the services are
                        chosen, we then move to plan the implementation of the
                        services. We draft out a detailed implementation plan,
                        taking care of all the contingencies, risks and other
                        miscellaneous factors which are pivotal to the success
                        of the service. The planning takes into consideration
                        the entire modus operandi of the organisation and
                        tailors an execution procedure that is specific to the
                        organisation. We never implement two comparable plans,
                        even if the companies seemingly need the same service.
                        Our planning protocols are strict and we go through a
                        comprehensive standard operating procedure to come up
                        with the implementation blueprint. We are prepared for
                        all contingencies, and drive your organisation to
                        success.
                      </p>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 5: Implementation</h5>
                      <p>
                        Implementation is the most critical step in bringing
                        about the digital transformation of your organisation,
                        and we ensure that we extend our full support to your
                        organisation throughout this procedure. We implement the
                        services to perfection and test them out for any
                        anomalies. Our team of expert consultants, architects
                        and engineers ensure that every small bit is paid
                        critical attention to while implementing our service
                        blueprint. We are always watchful for any counter-
                        productive elements within the blueprint which may be
                        anomalous for your organisation. We smoothen out all the
                        rough edges and help bring about a systematic
                        implementation of our services.
                      </p>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideItemContent}>
                      <h5>Stage 6: Monitoring and Maintenance</h5>
                      <p>
                        After the implementation of our service master plan, we
                        see to it that every element of the plan is functioning
                        smoothly. We monitor the functioning of the services
                        carefully and ensure that there are no glitches or
                        shortcomings in the execution procedure. We maintain the
                        services extended to organisations till they feel
                        confident and can manage things on their own. Our main
                        aim in the maintenance procedure is to ensure that there
                        are no glitches, bugs, coding errors, or any counter-
                        productive anomalies which render a poor user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag1"></div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.clientResults}>
        <h3>Client Results</h3>
        <div className={styles.countGrid}>
          <div className={styles.countItem}>
            <h2>52</h2>
            <p>Use case across 5 region</p>
          </div>

          <div className={styles.countItem}>
            <h2>200</h2>
            <p>Completed Projects</p>
          </div>

          <div className={styles.countItem}>
            <h2>5</h2>
            <p>Star ratings on app store</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
