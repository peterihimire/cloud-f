import React from "react";
import styles from "./styles.module.scss";

const Hero = ({ content }) => {
  return (
    <section className={styles.teams}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.container}>
          <div className={styles.right}>
            <h2>{content.contentHeading}</h2>

            <p>{content.contentSynopsis}</p>
          </div>

          <div className={styles.left}>
            <img alt="" src={content.contentImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
