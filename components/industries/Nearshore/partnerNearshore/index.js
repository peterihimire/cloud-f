import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const PartnerNearshore = () => {
  return (
    <section className={`${styles.trustedBy} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <div>
            <div className={styles.slideGroup}>
              <div className={styles.leftItem}>
                <h5>Nearshore</h5>
                <p>
                  Deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </p>
                <p>
                  Deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className={styles.rightItem}>
                <div className={styles.galaxyText}>
                  <img alt="" src="/images/blue-galaxy.png" />
                  <h5>
                    Related content: How to Suceed at Outsourcing Software
                    Development
                  </h5>
                </div>
                <div>
                  <h5>Overview: whats inside</h5>
                  <div className={`${styles.chooseReason}`}>
                    <img alt="" src="/images/dot-icon.svg" />
                    <p>Deserunt mollit anim id est laborum. </p>
                  </div>
                  <div className={`${styles.chooseReason}`}>
                    <img alt="" src="/images/dot-icon.svg" />
                    <p>Deserunt mollit anim id est laborum. </p>
                  </div>
                  <div className={`${styles.chooseReason}`}>
                    <img alt="" src="/images/dot-icon.svg" />
                    <p>Deserunt mollit anim id est laborum. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.contactUsLine} `}>
            <div>
              <h4>
                Partner with a trusted nearshore software development company
              </h4>
            </div>
            <div className={`${styles.contactLink}`}>
              <span>Choose Cloudfift</span>
              <span>
                <img alt="" src="/images/arrow-circle-right.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default PartnerNearshore;
