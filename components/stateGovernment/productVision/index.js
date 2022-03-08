import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ProductVision = () => {
  return (
    <section className={styles.buildingPartner}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.imageRight}`}>
          <div className={`${styles.buildingPartnerContent} wrapper`}>
            <div className={`${styles.buildingText}`}>
              <h3>Ready to realise your product vision?</h3>
              <div className={`${styles.contactLink}`}>
                <span>Partner with Us</span>
                <a href='/contact-us'>
                  <img alt="" src="/images/arrow-circle-right.svg" />
                </a>
              </div>
            </div>
            <div className={`${styles.man}`}>
              <img alt="" src="/images/nice-business.png" />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProductVision;
