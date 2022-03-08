import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h3>Federal Government</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisl
            mauris eu consectetur in odio ut risus. Ut cursus tortor viverra
            viverra nec in lectus.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default hero;
