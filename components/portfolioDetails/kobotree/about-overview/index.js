import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutOverview = () => {
  return (
    <div className={styles.aboutoverview}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <section className={styles.about}>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutLeft}>
              <h2>ABOUT THE CLIENT</h2>
              <p>
                To provide a platform for users to invest securely, safely with
                guarantee to their investment. Grow the finances of the user and
                create a robust return on investments for users.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>DESCRIPTION</h3>
              <div className={styles.aboutInfo}>
                <div className={styles.infoLeft}>
                  <div>
                    <span>Industry:</span>
                    <span>FINTECH</span>
                  </div>
                  <div>
                    <span>Location:</span>
                    <span>
                      AFRICA, EUROPE, AUSTRALIA-ASIA, ASIA, NORTH AMERICA
                      (Canada, Mexico, United States) and some parts of
                      Middle-East Dubai.
                    </span>
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
        </section>

        <section className={styles.overview}>
          <div className={styles.overviewWrapper}>
            <div className={styles.overLeft}>
              <h2>PROJECT OVERVIEW</h2>
              <p>
                KoboTree is a real estate investment app that is designed to
                help users grow their finances through investment that
                guarantees return and assures users that money can grow on Trees
                through the right type of investments.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/kobotree/S21_Mockup_8_ copy.jpeg"
              />
            </div>
          </div>
        </section>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutOverview;
