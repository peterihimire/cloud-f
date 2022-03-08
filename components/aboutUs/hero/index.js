import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutUsHero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h1>Deep dive and navigate business risks</h1>

          <p>
            We take a deep dive in understanding your digitized organization from
            Planning thorough Evaluation & Testing, and Clear Reporting.
          </p>

          <div className={styles.stats}>
            <div>
              <span>30+</span>
              <span>Certified Partners</span>
            </div>

            <div>
              <span>50+</span>
              <span>Projects Completed</span>
            </div>

            <div>
              <span>100%</span>
              <span>Interactive Work</span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutUsHero;
