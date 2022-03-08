import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>Partners And Affiliations</h1>
        <p>
          &nbsp;
        </p>
        <a href="/" className="btn-transparent btn-small">Join Us</a>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
