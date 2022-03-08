import React from "react";
import styles from "./styles.module.scss";

const serviceInclusiveness = ({ content }) => {
  return (
    <section className={styles.buildingPartner}>
      <div className={`${styles.imageRight}`}>
        <div className={`${styles.buildingPartnerContent} wrapper`}>
          <div className={`${styles.buildingText}`}>
            <h3>{content.sectionHeading1}</h3>
            <p>{content.sectionSynopsis}</p>
          </div>
          <div className={`${styles.man}`}>
            <img alt="" src="/images/service-inclusive.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default serviceInclusiveness;
