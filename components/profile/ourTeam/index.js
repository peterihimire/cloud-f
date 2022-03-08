import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
  return (
    <div className={styles.team}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>MEET OUR PEOPLE</h1>
        <p className={styles.lead}>
          Your can connect with some Cloudfift people here
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img alt="" src="/images/profile-team1.png" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h2>Orlean Dwyer</h2>
              <p className={styles.role}>Frontend Dev</p>
              <p className={styles.about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="/">Know Orlean more</a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img alt="" src="/images/profile-team2.png" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h2>Sheila Brooks</h2>
              <p className={styles.role}>Frontend Dev</p>
              <p className={styles.about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="/">Know Sheila more</a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img alt="" src="/images/profile-team3.png" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h2>Sandy Lory</h2>
              <p className={styles.role}>Frontend Dev</p>
              <p className={styles.about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="/">Know Sandy more</a>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Team;
