import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Culture = () => {
  return (
    <section className={styles.culture}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Our Culture</h2>
        <div className={styles.container}>
          <div className={styles.left}>
            <h3>THE CLOUDFIFT WAY</h3>
            <h4>We create innovative solutions for industries</h4>
            <p>
              We are driven by the power of data to create extraordinary
              outcomes for clients in heavily regulated industries.
            </p>
            <a href="/how-we-work" className="btn-block">
              Learn More
            </a>
          </div>
          <div className={styles.right}>
            <ul className={styles.grid}>
              <li>
                <div className={styles.content}>
                  <h3>We work hard, we play hard</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <h3>Positive Coporate Culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <h3>We encourage growth</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <h3>Personal and professional growth</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <h3>Positive Coporate Culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <h3>Positive Coporate Culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Culture;
