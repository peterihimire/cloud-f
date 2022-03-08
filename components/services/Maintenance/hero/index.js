import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h5>Services</h5>
          <h3>Application</h3>
          <h3>Maintenance</h3>
          <p>
            Validate innovative ideas, develop niche product concepts and create
            the blueprint for your product’s success, with ELEKS.
          </p>

          <div className={styles.related}>
            <div>
              <h5>Related Solutions</h5>
              <ul>
                <li>Research and development</li>
                <li>Cloud security</li>
                <li>MVP planning & strategy</li>
                <li>Proof of concept</li>
                <li>Technical feasibility studies</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default hero;
