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
                To create an online training platform accessible to everyone
                willing to learn and understand cloud services with ease.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>DESCRIPTION</h3>
              <div className={styles.aboutInfo}>
                <div className={styles.infoLeft}>
                  <div>
                    <span>Industry:</span>
                    <span>ED-TECH</span>
                  </div>
                  <div>
                    <span>Location:</span>
                    <span>WORLDWIDE</span>
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
          </ScrollAnimation>
        </section>

        <section className={styles.overview}>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.overviewWrapper}>
            <div className={styles.overLeft}>
              <h2>PROJECT OVERVIEW</h2>
              <p>
                Cloudtician is an online training platform for people interested
                in Information Technology. Most of the courses offered prepare
                students to take certification exams for the three major cloud
                providers (Microsoft Azure, Google Cloud Platform, and Amazon
                Web services).
              </p>
            </div>
            <div className={styles.overRight}>
              <img loading="lazy" alt="" src="/images/case-studies/cloudticians/Group-Mock.png" />
            </div>
          </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
};

export default AboutOverview;
