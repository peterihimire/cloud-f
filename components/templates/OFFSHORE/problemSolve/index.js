import React from "react";
import styles from "./styles.module.scss";

const ProblemSolve = ({ content }) => {
  return (
    <section className={`${styles.problemSolve} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.problemSolveTextDiv}`}>
          <h4>{content.sectionHeading1}</h4>
          <div>
            <div className={styles.slideGroup}>
              {content.sectionContents.slice(0, 3).map((cti, idx) => (
                <div key={idx} className={styles.slideItem}>
                  <h5>{cti.contentHeading}</h5>
                  <p>{cti.contentCtaText}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.contactUsLine}`}>
            <div>
              <h4>{content.sectionContents[3].contentHeading}</h4>
            </div>
            <div className={`${styles.contactLink}`}>
              <span>{content.sectionContents[3].contentCtaText}</span>
              <a href={content.sectionContents[3].contentCtaUrl}>
                <img alt="" src="/images/arrow-circle-right.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolve;
