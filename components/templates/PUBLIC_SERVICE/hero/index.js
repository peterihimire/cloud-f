import React from "react";
import styles from "./styles.module.scss";

const hero = ({ content }) => {
  console.log(content);
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>{content.contentHeading}</h3>
        <p>{content.contentSynopsis}</p>
      </div>
    </section>
  );
};

export default hero;
