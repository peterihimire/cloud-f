import React from "react";
import styles from "./styles.module.scss";
import CardOneIcon from "../../../../public/images/hire1.svg";

const Features = ({ content }) => {
  return (
    <section className={styles.features}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>
        <div className={styles.grid}>
          {content.sectionContents.map((ct, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={ct.contentLogo} alt="" />
              </div>
              <div className={styles.cardBody}>
                <p>{ct.contentSynopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
