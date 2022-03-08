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
            src="/images/case-studies/tuvo/web-1.png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>

          <p>
            Tuvo is a fintech application focused on giving users the ability to
            seamlessly carry out banking transactions without the hassle of
            banking formalities. Users are able to keep their money in a secure
            wallet, easily carry out transfers, receive and request for funds
            from other tuvo user. Tuvo leverages on the onion model layer
            security so that users can feel safe.
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
