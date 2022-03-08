import React from "react";
import styles from "./styles.module.scss";

const Commitment = ({ content }) => {
  return (
    <section className={styles.commitment}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.lead}>
          <h2>{content.sectionHeading1}</h2>
          <p>{content.sectionSynopsis}</p>
        </div>

        <div className={styles.grid}>
          {content.sectionContents.map((ct, idx) => (
            <div className={styles.card}>
              <img alt="" src={ct.contentImage} loading="lazy" />
              <div className={styles.content}>
                <p>{ct.contentSynopsis}</p>
                {/* <a href="/">Learn More</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
