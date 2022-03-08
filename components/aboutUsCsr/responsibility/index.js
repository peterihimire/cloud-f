import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Responsibility = () => {
  return (
    <section className={styles.responsibility}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img alt="" src="/images/resp1.png" />
          </div>

          <div className={styles.right}>
            <h2>Our Responsibilty</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt <br /> do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt s. <br />{" "}
              <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt <br /> do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt s. <br />{" "}
              <br /> sunt do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Responsibility;
