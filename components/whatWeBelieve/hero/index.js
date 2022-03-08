import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h1>Our commitment to inclusion & diversity</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisl
            mauris eu consectetur in odio ut risus. Ut cursus tortor viverra
            viverra nec in lectus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sodales nisl mauris eu consectetur in odio ut risus.
            Ut cursus tortor viverra viverra nec in lectus.
          </p>
          <a href="/contact-us" className="btn-transparent btn-medium">
            Shoot Us A Message
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
