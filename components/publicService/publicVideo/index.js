import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const PublicVideo = () => {
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.vid}>
            <img src="/images/service-1.png" alt="arrow-left-circle" />
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h5>Lucky Onoriode</h5>
                <small>CEO Cloudfift</small>
              </div>
              <div className={styles.gridItem}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h5>Simmon McKinney</h5>
                <small>CEO Cloudfift</small>
              </div>
            </div>
          </ScrollAnimation>
      </div>
    </section>
  );
};

export default PublicVideo;
