import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Commitment = () => {
  return (
    <section className={styles.commitment}>
      <div className={`${styles.wrapper} wrapper`}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.lead}>
          <h2>A commitment to our people</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique tristique morbi etiam amet. Gravida morbi lectus vivamus
            aliquam.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img alt="" src="/images/believe3.png" loading="lazy" />
            <div className={styles.content}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img alt="" src="/images/believe4.png" loading="lazy" />
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper euismod arcu e volutpat turpis bibendum.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img alt="" src="/images/believe5.png" loading="lazy" />
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper euismod arcu e volutpat turpis bibendum.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img alt="" src="/images/believe6.png" loading="lazy" />
            <div className={styles.content}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img alt="" src="/images/believe7.png" loading="lazy" />
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper euismod arcu e volutpat turpis bibendum.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img alt="" src="/images/believe8.png" loading="lazy" />
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper euismod arcu e volutpat turpis bibendum.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Commitment;
