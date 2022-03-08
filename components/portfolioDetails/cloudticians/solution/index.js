import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Solution = () => {
  return (
    <section className={styles.solution}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <img
            loading="lazy"
            alt=""
            src="/images/case-studies/cloudticians/Browse.png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>
          <p>
            Cloudtician is an online Learning management platform for people
            interested in Information Technology. Most of the courses offered
            prepare students to take certification exams for the three major
            cloud providers (Microsoft Azure, Google Cloud Platform, and Amazon
            Web services). This application is designed to help organizations
            track candidates’ skills and create learning journeys to train
            employees across various cloud technologies.
          </p>{" "}
          <br /> <br />
          <p>There are three packages namely: </p>
          <ul>
            <li>
              <b> 1.</b> Individual Plan
            </li>
            <li>
              <b> 2.</b> Business Plan (SME's)
            </li>
            <li>
              <b> 3.</b> Enterprise Plan (Large Organizations)
            </li>
          </ul>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.imageGroup} wrapper`}>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/cloudticians/cloudtician1.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            src="/images/case-studies/cloudticians/cloudtician3.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            loading="lazy"
            s
            src="/images/case-studies/cloudticians/cloudtician2.jpeg"
          />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Solution;
