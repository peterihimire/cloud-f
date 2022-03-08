import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>Our Portfolio</h1>

        <p>
          We at Cloudfift cater to the needs of customers from all places and
          spaces. Our highly tailored and multi-disciplinary services ensure
          that we go above and beyond our limits to accomplish your objectives.
          We are dedicated to providing a safe space for you to execute your
          information technology projects. Our clientage encompasses several
          geographical regions of the world. We serve clients in the US, EU,
          Asia Pacific and Africa. We are also open to the scope of extending
          our services to the islands of Australia and New Zealand.
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
