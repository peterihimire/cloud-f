import React from "react";
import styles from "./styles.module.scss";

const AboutUsHero = ({ data }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url('${data.heroImage}') no-repeat` }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <h1>{data.heroHeading}</h1>

        <p>{data.heroSynopsis}</p>

        <div className={styles.stats}>
          <div>
            <span>30+</span>
            <span>Certified Partners</span>
          </div>

          <div>
            <span>50+</span>
            <span>Projects Completed</span>
          </div>

          <div>
            <span>100%</span>
            <span>Interactive Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
