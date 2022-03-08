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
            src="/images/case-studies/kobotree/2-copy-2.jpeg"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>

          <p>
            This is an application focused mainly on helping its users grow
            their finances through investment that guarantees return. Investment
            is gathered through crowdfunding and investment portfolio which can
            be easily monitored by users. Investment funding goal has to be met
            for ROI else returns cannot be guaranteed.
          </p>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.imageGroup} wrapper`}>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/kobotree/2-copy-1.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/kobotree/S21_Mockup_16_ copy.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/kobotree/2-copy-3.jpeg"
          />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Solution;
