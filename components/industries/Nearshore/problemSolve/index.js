import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ProblemSolve = () => {
  return (
    <section className={`${styles.problemSolve} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          {/* <div className={`${styles.fintechSolutions} `}> */}
          <div className={`${styles.problemSolveTextDiv}`}>
            <h4>Problems We'll Help You Solve</h4>
            <div>
              <div className={styles.slideGroup}>
                <div className={styles.slideItem}>
                  <h5>Fill you IT resourcing gaps</h5>
                  <p>
                    Deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                  </p>
                </div>

                <div className={styles.slideItem}>
                  <h5>Fill you IT resourcing gaps</h5>
                  <p>
                    Deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                  </p>
                </div>

                <div className={styles.slideItem}>
                  <h5>Fill you IT resourcing gaps</h5>
                  <p>
                    Deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.contactUsLine}`}>
              <div>
                <h4>
                  Looking for a cost-effective alternative to in-house development
                </h4>
              </div>
              <div className={`${styles.contactLink}`}>
                <span>Choose Cloudfift</span>
                <a href="contact-us">
                  <img alt="" src="/images/arrow-circle-right.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProblemSolve;
