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
                Tuvo aims to level the barriers that prevent everyday Americans
                from having the ability to bank as they chose. Tuvo takes the
                bank to the people and not the people to the bank.
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
                    <span>UNITED STATES</span>
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
                Tuvo app gives users the ability to bank however they want to
                bank, it provides users the flexibility to store their money in
                a wallet, transfer, receive and request for funds from other
                Tuvo users who might be their family or friends or even business
                associates. Tuvo goes the extra mile to add onion model layer
                security in the application so that users can feel safe. Tuvo
                also provides engaging customer service to solve real user
                problems when one arises. Tuvo is designed for banking the
                UnBanked. It will be made available across platforms mobile and
                Web.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/tuvo/Web-landing-mobile.png"
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
