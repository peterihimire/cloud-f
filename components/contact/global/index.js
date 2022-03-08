import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Global = () => {
  return (
    <section className={styles.global}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>
            With our ventures across the globe, we are committed to serving our
            clients. Contact us for your digital venture. <br /> Let's connect!
          </h2>

          <div className={styles.map}>
            <img alt="" loading="lazy" src="/images/mapbase.svg" />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Global;
