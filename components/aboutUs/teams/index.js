import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Teams = () => {
  return (
    <section className={styles.teams}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img alt="" src="/images/about8.png" />
          </div>

          <div className={styles.right}>
            <h2>Our Nearshore & Offshore Teams</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. <br /> <br /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>

            <div className={styles.info}>
              <p>
                We offer flexible cooperation models that fit your goals,
                resources and timeline.
              </p>
            </div>

            <a href="/">
              <span>Learn More</span>

              <span className={styles.arrow}>
                <i className="far fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Teams;
