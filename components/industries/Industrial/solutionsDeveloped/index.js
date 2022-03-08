import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const solutionsDeveloped = () => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.fintechSolutions} `}>
            <div className={`${styles.imgDiv}`}>
              <img alt="" src="/images/developed-fintech-soln.svg" />
            </div>
            <div className={`${styles.fintechSolutionsTextDiv}`}>
              <h3>Fintech solutions we have developed</h3>
              <p>
                We help you extend your business limits, providing the latest
                digital solutions that help you grow the customer base and enjoy a
                consistent profit. We thoroughly study your business and develop
                appropriate solutions, helping you find new opportunities in
                everyday life.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default solutionsDeveloped;
