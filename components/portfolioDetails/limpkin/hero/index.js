import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <p> Case Study</p>
          <h1>Limpkin</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.mockup}>
            <img
              loading="lazy"
              alt=""
              src="/images/case-studies/limpkin/Lpatop-and-Mobile.png"
            />
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
