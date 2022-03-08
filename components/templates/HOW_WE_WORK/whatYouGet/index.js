import React from "react";
import styles from "./styles.module.scss";

const WhatYouGet = ({ content }) => {
  return (
    <section className={styles.what}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

        <div className={styles.grid}>
          {content.sectionContents.map((ct, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.image}>
                <img alt="" src={ct.contentLogo} />
              </div>

              <div className={styles.text}>
                <p>{ct.contentSynopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
