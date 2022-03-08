import React from "react";
import styles from "./styles.module.scss";

const Responsibility = ({ content }) => {
  return (
    <section className={styles.responsibility}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img alt="" src={content.sectionImage} />
        </div>

        <div className={styles.right}>
          <h2>{content.sectionHeading1}</h2>
          <p>{content.sectionSynopsis}</p>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
