import React from "react";
import styles from "./styles.module.scss";
import CaseStudy from "../caseStudy";

const Expertise = ({ content }) => {
  return (
    <section className={styles.expertise}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.ourExpertise}>
          <h2>{content[0].sectionHeading1}</h2>
          <div className={styles.grid}>
            {content[0].sectionContents.map((cti, idx) => (
              <div className={styles.expertiseCard}>
                <div className={styles.cardImg}>
                  <img
                    src={cti.contentImage}
                    alt={cti.contentHeading}
                    className={styles.imgLogo}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3>{cti.contentHeading}</h3>
                  <p>{cti.contentSynopsis}</p>
                </div>
                <div className={styles.cardFooter}>
                  <a href={cti.contentCtaUrl}>{cti.contentCtaText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CaseStudy content={content[1]} />

        <div className={styles.who}>
          <h2>{content[2].sectionHeading1}</h2>
          <div className={styles.whoWrapper}>
            <div className={styles.whoLeft}>
              {/* <h3>
                We are in the business of solving problems. dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt{" "}
              </h3> */}
              <p>{content[2].sectionSynopsis}</p>
            </div>
            <div className={styles.whoRight}>
              <div className={styles.whoImg}>
                <img loading="lazy" alt="" src={content[2].sectionImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
