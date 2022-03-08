import React from "react";
import styles from "./styles.module.scss";
import CaseStudy from "../../../techExpertise/caseStudy";
import ScrollAnimation from 'react-animate-on-scroll';

const CaseStudies = () => {
  return (
    <section className={styles.caseStudies}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <CaseStudy
          wrapperClass={styles.container}
          heading="Related Case Studies"
        />
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default CaseStudies;
