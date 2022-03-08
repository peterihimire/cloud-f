import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Solution = () => {
  return (
    <section className={styles.solution}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <img
            loading="lazy"
            alt=""
            src="/images/case-studies/vindoc/physicians/MacBook-Pro-16-inch.png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>

          <p>
            Vindoc is a telemedicine application solely focused on helping users
            locate medical professional virtually. Users are able to easily
            schedule virtual medical appointment with a selected medical
            practitioner.
          </p>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.imageGroup} wrapper`}>
        <div>
          <img alt="" loading="lazy" src="/images/pd1.png" />
        </div>
        <div>
          <img alt="" loading="lazy" src="/images/pd2.png" />
        </div>
        <div>
          <img alt="" loading="lazy" src="/images/pd3.png" />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Solution;
