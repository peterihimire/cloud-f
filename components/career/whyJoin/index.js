import React from "react";
import styles from "./styles.module.scss";
import Vacancies from "../vacancies";
import ScrollAnimation from 'react-animate-on-scroll';

const WhyJoin = () => {
  return (
    <>
      <div className={`${styles.wrapper} wrapper`}>
        <section className={styles.why}>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <h2>Why Join Cloudfift?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyImg}>
                  <img loading="lazy" alt="" src="/images/career1.png" />
                </div>
                <div className={styles.whyBody}>
                  <h3>Positive Corporate Culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                    consequat pellentesque volutpat dolor lorem maecenas nullam
                    lectus. Quis a eu, amet, adipiscing et at erat aliquet.
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyImg}>
                  <img loading="lazy" alt="" src="/images/career2.png" />
                </div>
                <div className={styles.whyBody}>
                  <h3>Reach Your True Potential</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                    consequat pellentesque volutpat dolor lorem maecenas nullam
                    lectus. Quis a eu, amet, adipiscing et at erat aliquet.
                    volutpat dolor lorem maecenas nullam lectus. Quis a eu, amet,
                    adipiscing et at erat alique
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyImg}>
                  <img loading="lazy" alt="" src="/images/career3.png" />
                </div>
                <div className={styles.whyBody}>
                  <h3>Personal and Professional Growth</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                    consequat pellentesque volutpat dolor lorem maecenas nullam
                    lectus. Quis a eu, amet, adipiscing et at erat aliquet.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Vacancies />
      </div>
    </>
  );
};

export default WhyJoin;
