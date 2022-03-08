import React from "react";
import styles from "./styles.module.scss";

const WhatWeDo = ({ content }) => {
  return (
    <section className={styles.what}>
      <div className={styles.image}>
        <img alt="" src={content.sectionImage} />
      </div>

      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

        <div className={styles.grid}>
          {content.sectionContents.map((ct, idx) => (
            <div key={idx} className={styles.item}>
              <h3>{ct.contentHeading}</h3>
              <p>{ct.contentSynopsis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
