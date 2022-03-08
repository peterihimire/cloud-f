import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhatWeDo = () => {
  return (
    <section className={styles.what}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
         <h2>What We Do</h2>
         </ScrollAnimation>
         <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.top}>
            <div className={styles.image}>
              <img alt="" src="/images/about6.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.superior}>
                <h3>Superior quality of work</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt <br /> do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt
                </p>
              </div>
              <div className={styles.superior}>
                <h3>Interactive consultation</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt <br /> do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt{" "}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.bottom}>
          <div className={styles.content}>
            <div className={styles.superior}>
              <h3>High quality and detailed deliverables</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt <br /> do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt
              </p>
            </div>
            <div className={styles.superior}>
              <h3>Superior quality of work</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt <br /> do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt{" "}
              </p>
            </div>
          </div>

          <div className={styles.image}>
            <img alt="" src="/images/about7.png" />
          </div>
        </div>
      </ScrollAnimation>

      </div>
    </section>
  );
};

export default WhatWeDo;
