import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhatWeDo = () => {
  return (
    <section className={styles.what}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.image}>
          <img alt="" src="/images/csr2.png" />
        </div>

        <div className={`${styles.wrapper} wrapper`}>
          <h2>What We Do</h2>

          <div className={styles.grid}>
            <div className={styles.item}>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur pellentesque risus viverra elementum. Ut scelerisque
                fermentum, velit duis eu odio est vel.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur pellentesque risus viverra elementum. Ut scelerisque
                fermentum, velit duis eu odio est vel.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur pellentesque risus viverra elementum. Ut scelerisque
                fermentum, velit duis eu odio est vel.
              </p>
            </div>
            <div className={styles.item}>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur pellentesque risus viverra elementum. Ut scelerisque
                fermentum, velit duis eu odio est vel.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhatWeDo;
