import React from "react";
import styles from "./styles.module.scss";

const ProductVision = ({ content }) => {
  console.log(content);
  return (
    <section className={styles.buildingPartner}>
      <div className={`${styles.imageRight}`}>
        <div className={`${styles.buildingPartnerContent} wrapper`}>
          <div className={`${styles.buildingText}`}>
            <h3>{content.sectionHeading1}</h3>
            <div className={`${styles.contactLink}`}>
              <span>Partner with Us</span>
              <a href="contact-us">
                <img alt="" src="/images/arrow-circle-right.svg" />
              </a>
            </div>
          </div>
          <div className={`${styles.man}`}>
            <img alt="" src="/images/nice-business.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVision;
