import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhatYouGet = () => {
  return (
    <section className={styles.what}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>What You Get With Cloudfift</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what1.svg" />
            </div>

            <div className={styles.text}>
              <p>Top Talent</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what2.svg" />
            </div>

            <div className={styles.text}>
              <p>Flexible, cost-efficient cooperation models</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what3.svg" />
            </div>

            <div className={styles.text}>
              <p>Technology expertise</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what4.svg" />
            </div>

            <div className={styles.text}>
              <p>Design thinking transformation</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what5.svg" />
            </div>

            <div className={styles.text}>
              <p>Agile development method</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img alt="" src="/images/what6.svg" />
            </div>

            <div className={styles.text}>
              <p>Technological innovation</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhatYouGet;
