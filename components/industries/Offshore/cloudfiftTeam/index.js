import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const cloudfiftTeam = () => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.fintechSolutions} `}>
          <div className={`${styles.fintechSolutionsTextDiv}`}>
            <h3>Cloudfift Global Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={`${styles.teamOfferDiv}`}>
              <p>
                We offer flexible cooperation models that fit your goals,
                resources and timeline.
              </p>
            </div>
          </div>
          <div className={`${styles.imgDiv}`}>
            <img alt="" src="/images/team-img.png" />
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default cloudfiftTeam;
