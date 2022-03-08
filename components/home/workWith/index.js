import React from "react";
import styles from "./styles.module.scss";
import ReactTooltip from "react-tooltip";
import ScrollAnimation from 'react-animate-on-scroll';

const WorkWith = ({ sectionClass, heading, wrapperClass }) => {
  return (
    <section
      className={`${styles.workWith} ${sectionClass ? sectionClass : ""}`}
    >
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div
          className={`${styles.wrapper} wrapper ${
            wrapperClass ? wrapperClass : ""
          }`}
        >
          <div className={styles.first}>
            <img
              alt=""
              src="/images/workwith1.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
            <img
              alt=""
              src="/images/workwith2.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
            <img
              alt=""
              src="/images/workwith3.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
          </div>

          <div className={styles.second}>
            <img
              alt=""
              src="/images/workwith4.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
            <div>
              <h2>{heading}</h2>
              <p>We Work, We Live, We Create</p>
            </div>
            <img
              alt=""
              src="/images/workwith5.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
          </div>

          <div className={styles.third}>
            <img
              alt=""
              src="/images/workwith6.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
            <img
              alt=""
              src="/images/workwith7.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
            <img
              alt=""
              src="/images/workwith8.png"
              data-tip
              data-for="testimony1"
              loading="lazy"
            />
          </div>
        </div>

        <ReactTooltip
          place="top"
          type="dark"
          effect="float"
          id="testimony1"
          className={styles.tooltip}
        >
          <div className={styles.testimony}>
            <div className={styles.quoteIcon}>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className={styles.testimonyText}>
              <p>
                Our highly customised cloud services begin by thoroughly analyzing
                your software requirements, enterprise challenges, business
                operations, long-term goals and anomalous loopholes. We then
                tailor highly feasible software solutions which are dedicated to
                bringing about transformational shifts at your organisation.
              </p>
            </div>
            <div className={styles.reviewer}>
              <p>Lucky Onoriode</p>
              <p>CEO, Cloudfift </p>
            </div>
          </div>
        </ReactTooltip>
      </ScrollAnimation>
    </section>
  );
};

export default WorkWith;
