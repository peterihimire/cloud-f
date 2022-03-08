import React from "react";
import styles from "./styles.module.scss";

const HowWeWork = ({ content }) => {
  console.log(content);
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.wayGrid}>
          <div className={styles.left}>
            <h4>{content.sectionHeading1}</h4>
            <p>{content.sectionSynopsis}</p>
          </div>
          <div className={styles.right}>
            <div className={styles.gridItems}>
              <h3>1.</h3>
              <h5>{content.sectionContents[0].contentHeading}</h5>
              <p>{content.sectionContents[0].contentCtaText}</p>
            </div>
            <div className={styles.gridItems}>
              <h3>2.</h3>
              <h5>{content.sectionContents[1].contentHeading}</h5>
              <p>{content.sectionContents[1].contentCtaText}</p>
            </div>

            <div className={styles.gridItems}>
              <h3>3.</h3>
              <h5>{content.sectionContents[2].contentHeading}</h5>
              <p>{content.sectionContents[2].contentCtaText}</p>
            </div>
            <div className={styles.gridItems}>
              <h3>4.</h3>
              <h5>{content.sectionContents[3].contentHeading}</h5>
              <p>{content.sectionContents[3].contentCtaText}</p>
            </div>

            <div className={styles.gridItems}>
              <h3>5.</h3>
              <h5>{content.sectionContents[4].contentHeading}</h5>
              <p>{content.sectionContents[4].contentCtaText}</p>
            </div>
            <div className={styles.gridItems}>
              <h3>6.</h3>
              <h5>{content.sectionContents[5].contentHeading}</h5>
              <p>{content.sectionContents[5].contentCtaText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
