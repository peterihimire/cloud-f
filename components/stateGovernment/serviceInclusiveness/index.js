import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const serviceInclusiveness = () => {
  return (
    <section className={styles.buildingPartner}>
        <div className={`${styles.imageRight}`}>
          <div className={`${styles.buildingPartnerContent} wrapper`}>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className={`${styles.buildingText}`}>
              <h3>Service with Inclusiveness</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commo
              </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className={`${styles.man}`}>
                <img alt="" src="/images/service-inclusive.png" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
    </section>
  );
};

export default serviceInclusiveness;
