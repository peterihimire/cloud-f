import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutOverview = () => {
  return (
    <div className={styles.aboutoverview}>
      <div className={`${styles.wrapper} wrapper`}>
        <section className={styles.about}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutLeft}>
              <h2>ABOUT THE CLIENT</h2>
              <p>
                Changing times calls for evolving technologies, and with VinDoc,
                one is able to experience medical attention and care from
                licenced professionals from the privacy of their desired
                location. With advanced AI and ML, VinDoc provides
                clients/patients with the convenience and flexibility of an
                office visit. The culture and environment of the value of
                VinDoc’s clients/patients will make each experience stress free
                and with ease, manageable and maintainable function and
                interact.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>DESCRIPTION</h3>
              <div className={styles.aboutInfo}>
                <div className={styles.infoLeft}>
                  <div>
                    <span>Industry:</span>
                    <span>TELE-MEDICINE</span>
                  </div>
                  <div>
                    <span>Location:</span>
                    <span>UNITED STATES & CANADA</span>
                  </div>
                </div>
                <div className={styles.infoRight}>
                  <div>
                    <span>Client Since:</span>
                    <span>2021</span>
                  </div>
                  <div>
                    <span>Status:</span>
                    <span>IN PROGRESS</span>
                  </div>
                </div>
              </div>
              <div className={styles.aboutActions}>
                <button>Product Design</button>
                <button>UX Research</button>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </section>

        <section className={styles.overview}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.overviewWrapper}>
            <div className={styles.overLeft}>
              <h2>PROJECT OVERVIEW</h2>
              <p>
                Vindoc is a telemedicine application that allows
                clients/patients to carry out online consultation with expert
                physicians around their location and across the world.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/vindoc/patients/Mockup.png"
              />
            </div>
          </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
};

export default AboutOverview;
