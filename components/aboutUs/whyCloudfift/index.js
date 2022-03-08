import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhyCloudfift = () => {
  return (
    <section className={styles.why}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>Why Cloudfift?</h2>

          <div className={styles.grid}>
            <div className={styles.item}>
              <h3>Technology Pragmatists</h3>
              <p>
                We use tools and talents the job requires. Together with our
                clients to figure out requirements for a successful and intutive
                product.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Never compromise on quality</h3>
              <p>
                We don’t want our brand associated with anything that isn’t of the
                higest quality. We make quality products, we give quality advice
                and we only hire qulity people. People who want the best come to
                us for a reason
              </p>
            </div>
            <div className={styles.item}>
              <h3>The experience is everything</h3>
              <p>
                We not only figure out the experience and write the code, but we
                give advice on the product development right from start. Our goal
                is to contribute to a thriving business
              </p>
            </div>
            <div className={styles.item}>
              <h3>Technology Pragmatists</h3>
              <p>
                We use tools and talents the job requires. Together with our
                clients to figure out requirements for a successful and intutive
                product.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Never compromise on quality</h3>
              <p>
                We don’t want our brand associated with anything that isn’t of the
                higest quality. We make quality products, we give quality advice
                and we only hire qulity people. People who want the best come to
                us for a reason
              </p>
            </div>
            <div className={styles.item}>
              <h3>The experience is everything</h3>
              <p>
                We not only figure out the experience and write the code, but we
                give advice on the product development right from start. Our goal
                is to contribute to a thriving business
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhyCloudfift;
