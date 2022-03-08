import React from "react";
import styles from "./styles.module.scss";

const SolutionsDeveloped = ({ content }) => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.fintechSolutions} `}>
          <div className={`${styles.imgDiv}`}>
            <img alt="" src={content.sectionImage} />
          </div>
          <div className={`${styles.fintechSolutionsTextDiv}`}>
            <h3>{content.sectionHeading1}</h3>
            <p>{content.sectionSynopsis}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsDeveloped;
