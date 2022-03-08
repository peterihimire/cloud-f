import React from "react";
import styles from "./styles.module.scss";

const CloudfiftTeam = ({ content }) => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.fintechSolutions} `}>
          <div className={`${styles.fintechSolutionsTextDiv}`}>
            <h3>{content.sectionHeading1}</h3>
            <p>{content.sectionSynopsis}</p>
            {/* <div className={`${styles.teamOfferDiv}`}>
              <p>
                We offer flexible cooperation models that fit your goals,
                resources and timeline.
              </p>
            </div> */}
          </div>
          <div className={`${styles.imgDiv}`}>
            <img alt="" src={content.sectionImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudfiftTeam;
