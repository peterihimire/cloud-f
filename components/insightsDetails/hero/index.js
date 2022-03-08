import React from "react";
import styles from "./styles.module.scss";

const Hero = ({ data }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      url("https://cloudfift-img-bucket.s3.amazonaws.com/${data.imageUrl}")`,
      }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.tag}>ARTICLE</div>
        <h1>{data.title}</h1>
      </div>
    </section>
  );
};

export default Hero;
