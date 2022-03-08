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
            src="/images/case-studies/kobofundme/MacBook-Pro-16-Recovered.png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>

          <p>
            A crowdfunding app to help users raise funds for their projects from
            project sponsors who can be in any location in the world. Users are
            able to provide all the details required for the project on a single
            platform. This way, there’s no location barrier or difficulty in
            getting a project sponsor. Users from developing and developed
            nations are all welcome to utilize the opportunities provided by
            this application of bringing technological and innovative ideas to
            life.
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
            src="/images/case-studies/kobofundme/fundme1.png"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/kobofundme/fundme2.png"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/kobofundme/fundme4.png"
          />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Solution;
