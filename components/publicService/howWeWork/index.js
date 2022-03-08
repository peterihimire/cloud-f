import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const HowWeWork = () => {
  return (
    <section className={styles.insight}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.wayGrid}>
            <div className={styles.left}>
              <h4>How We Work</h4>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Lorem ipsum amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.gridItems}>
                <h3>1.</h3>
                <h5>Analysis and Scoping</h5>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
              <div className={styles.gridItems}>
                <h3>2.</h3>
                <h5>Analysis and Scoping</h5>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div className={styles.gridItems}>
                <h3>3.</h3>
                <h5>Analysis and Scoping</h5>
                <p>
                  We weave your objectives, milestones, expectations and budget
                  together to create.
                </p>
              </div>
              <div className={styles.gridItems}>
                <h3>4.</h3>
                <h5>Deliver Quality</h5>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>

              <div className={styles.gridItems}>
                <h3>5.</h3>
                <h5>Analysis and Scoping</h5>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
              <div className={styles.gridItems}>
                <h3>6.</h3>
                <h5>Analysis and Scoping</h5>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default HowWeWork;
