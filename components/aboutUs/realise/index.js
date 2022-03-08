import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Realise = () => {
  return (
    <section className={styles.realise}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <h2>Ready to realise your product vision?</h2>
          <a href="/contact-us">
            <span>Partner with Us</span>
            <span className={styles.arrow}>
              <i className="far fa-arrow-right"></i>
            </span>
          </a>
        </div>

        <div className={styles.right}>
          <img alt="" src="/images/about5.png" />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Realise;
