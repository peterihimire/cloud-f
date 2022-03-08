import React from "react";
import styles from "./styles.module.scss";

const PublicVideo = ({ content }) => {
  console.log(content);
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.vid}>
        <img src={content.sectionImage} alt="" />
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <p>{content.sectionContents[0].contentCtaText}</p>
            <h5>{content.sectionContents[0].contentHeading}</h5>
            <small>{content.sectionContents[0].contentSynopsis}</small>
          </div>
          <div className={styles.gridItem}>
            <p>{content.sectionContents[1].contentCtaText}</p>
            <h5>{content.sectionContents[1].contentHeading}</h5>
            <small>{content.sectionContents[1].contentSynopsis}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicVideo;
