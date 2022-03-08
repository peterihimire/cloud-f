import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = (props) => {
  const content = props.careerContent.careerProp;
  console.log(content);

  return (
    <div className={styles.hero}>
      <section className={`${styles.wrapper} wrapper`}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <h1>{content.title}</h1>
        <div className={styles.tags}>
          <span>{content.city}</span>
          <span>{content.type}</span>
          <span>{content.category}</span>
        </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Hero;
