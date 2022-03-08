import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className={styles.teams}>
    <div className={`${styles.wrapper} wrapper`}>
      <div className={styles.container}>
        <div className={styles.right}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <h2>Cloudfift: Your Offshore Software Development Company</h2>

          <p>
            Build your nearshore team in one of our 11 delivery centers in 8
            countries
          </p>
        </ScrollAnimation>
        </div>

        <div className={styles.left}>
          <img alt="" src="/images/cloudfift-branches.png" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
