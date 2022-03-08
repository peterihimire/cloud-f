import React from "react";
import styles from "./styles.module.scss";

const BuildingPartner = ({ content }) => {
  return (
    <section className={styles.buildingPartner}>
      <div className={`${styles.imageRight}`}>
        <div className={`${styles.buildingPartnerContent} wrapper`}>
          <div className={`${styles.buildingText}`}>
            <h3>{content[0].sectionHeading1}</h3>
            <p>{content[0].sectionSynopsis}</p>
          </div>
          <div className={`${styles.man}`}>
            <img alt="" src={content[0].sectionImage} />
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper} wrapper`}>
        <div>
          <div className={`${styles.heading}`}>
            <h6>What we will do for you</h6>
            <p>{content[1].sectionHeading1}</p>
          </div>

          <div className={`${styles.developFintechDiv}`}>
            <div className={`${styles.developFintechGrid}`}>
              {content[1].sectionContents.map((cti, idx) => (
                <div key={idx} className={`${styles.singleGrid}`}>
                  <div className={`${styles.stackTextDiv}`}>
                    <img alt="" src={cti.contentLogo} />
                    <h5>{cti.contentHeading}</h5>
                  </div>
                  <p>{cti.contentSynopsis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.contactUsLine} wrapper`}>
        <div>
          <h4>{content[1].sectionSynopsis}</h4>
        </div>
        <div className={`${styles.contactLink}`}>
          <span>contact us</span>
          <a href="contact-us">
            <img alt="" src="/images/left-arrow-circle.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuildingPartner;
