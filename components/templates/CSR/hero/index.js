import React from "react";
import styles from "./styles.module.scss";

const Hero = ({ content }) => {
  return (
    <section
      className={styles.hero}
      style={{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.98) 33.86%, rgba(0, 0, 0, 0) 114.81%),  url('${content.contentImage}') no-repeat`,
      }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <h1>{content.contentHeading}</h1>
        <p>{content.contentSynopsis}</p>

        <div className={styles.reportBtn}>
          <a href={content.contentCtaUrl} style={{ color: "white" }}>
            <button>{content.contentCtaText}</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
