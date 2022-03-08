import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ChooseService = () => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.fintechSolutions} `}>
          <div className={`${styles.imgDiv}`}>
            <img alt="" src="/images/team-img-2.png" />
          </div>
          <div className={`${styles.fintechSolutionsTextDiv}`}>
            <h3>Why choose our offshore service</h3>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>
                Almost three decades of custom software development experience
              </p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>Extensive technology consulting expertise</p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>One of the largest data science teams in Ukraine</p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>Reduced investment risk with MVP development</p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>Extensive technology consulting expertise</p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>Extensive technology consulting expertise</p>
            </div>
            <div className={`${styles.chooseReason}`}>
              <img alt="" src="/images/dot-icon.svg" />
              <p>Extensive technology consulting expertise</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default ChooseService;
