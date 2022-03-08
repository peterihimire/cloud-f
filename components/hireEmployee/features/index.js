import React from "react";
import styles from "./styles.module.scss";
import CardOneIcon from "../../../public/images/hire1.svg";
import CardTwoIcon from "../../../public/images/hire2.svg";
import CardThreeIcon from "../../../public/images/hire3.svg";
import CardFourIcon from "../../../public/images/hire4.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section className={styles.features}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>Employees Features</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <CardOneIcon />
              </div>
              <div className={styles.cardBody}>
                <p>PART-TIME SUPERVISOR & QUALITY AUDITOR</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <CardTwoIcon />
              </div>
              <div className={styles.cardBody}>
                <p>EASY RAMP-UP AND RAMP-DOWN OF YOUR TEAM</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <CardThreeIcon />
              </div>
              <div className={styles.cardBody}>
                <p>MIN 4YRS OF EXPERIENCED DEVELOPER</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <CardFourIcon />
              </div>
              <div className={styles.cardBody}>
                <p>FULL CONTROL OVER YOUR EMPLOYEE</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Features;
