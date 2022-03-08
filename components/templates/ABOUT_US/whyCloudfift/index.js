import React from "react";
import styles from "./styles.module.scss";

const WhyCloudfift = ({ data }) => {
  return (
    <section className={styles.why}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{data.sectionHeading1}</h2>

        <div className={styles.grid}>
          {data.sectionContents.map((content, index) => (
            <div key={index} className={styles.item}>
              <h3>{content.contentHeading}</h3>
              <p>{content.contentSynopsis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCloudfift;
