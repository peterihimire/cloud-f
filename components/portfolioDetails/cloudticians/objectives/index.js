import React from "react";
import styles from "./styles.module.scss";
import CardOne from "../../../../public/images/pd4.svg";
import CardTwo from "../../../../public/images/pd5.svg";
import CardThree from "../../../../public/images/pd6.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Objectives = () => {
  return (
    <section className={styles.objectives}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={styles.wrapper}>
        <h2>OBJECTIVES</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <CardOne />
            </div>
            <div className={styles.cardBody}>
              <p>Easy access to different cloud courses</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <CardTwo />
            </div>
            <div className={styles.cardBody}>
              <p>Provision of preparatory exams and track progress</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <CardThree />
            </div>
            <div className={styles.cardBody}>
              <p>Grow skills on the platform through playgrouds and labs</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Objectives;
