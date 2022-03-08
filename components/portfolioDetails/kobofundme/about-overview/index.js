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
                To include developing nations and not just developed nations on
                one platform to pursue collective goals of bringing
                technological and innovative ideas to life.
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
                    <span>AFRICA</span>
                  </div>
                </div>
                <div className={styles.infoRight}>
                  <div>
                    <span>Client Since:</span>
                    <span>2021</span>
                  </div>
                  <div>
                    <span>Status:</span>
                    <span>COMPLETED</span>
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
                KoboFundMe is a crowdfunding app that is designed to help users
                raise fund for their projects. The application enables users to
                upload project pictures, project details and expected amount to
                be raised for the project.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/kobofundme/Group-1.png"
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
