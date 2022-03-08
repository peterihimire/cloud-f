import React from "react";
import styles from "./styles.module.scss";

const WhatWeDo = ({ data }) => {
  return (
    <section className={styles.what}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{data[0].sectionHeading1}</h2>
        <div className={styles.top}>
          <div className={styles.image}>
            <img alt="" src={data[0].sectionImage} />
          </div>
          <div className={styles.content}>
            {data[0].sectionContents.map((content, idx) => (
              <div key={idx} className={styles.superior}>
                <h3>{content.contentHeading}</h3>
                <p>{content.contentSynopsis}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.content}>
            {data[1].sectionContents.map((content, idx) => (
              <div key={idx} className={styles.superior}>
                <h3>{content.contentHeading}</h3>
                <p>{content.contentSynopsis}</p>
              </div>
            ))}
          </div>

          <div className={styles.image}>
            <img alt="" src={data[1].sectionImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
