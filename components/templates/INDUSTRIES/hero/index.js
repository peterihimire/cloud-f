import React from "react";
import styles from "./styles.module.scss";

const Hero = ({ content }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 33.86%, rgba(0, 0, 0, 0) 114.81%
      ),url("${content.contentImage}")`,
      }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <h5>Industry</h5>
        <h3>{content.contentHeading}</h3>
        <p>{content.contentSynopsis}</p>
      </div>
    </section>
  );
};

export default Hero;
