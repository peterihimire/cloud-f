import React from "react";
import styles from "./styles.module.scss";

const Realise = ({ data }) => {
  return (
    <section className={styles.realise}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <h2>{data.contentHeading}</h2>
          <a href={data.contentCtaUrl}>
            <span>{data.contentSynopsis}</span>
            <span className={styles.arrow}>
              <i className="far fa-arrow-right"></i>
            </span>
          </a>
        </div>

        <div className={styles.right}>
          <img alt="" src={data.contentImage} />
        </div>
      </div>
    </section>
  );
};

export default Realise;
