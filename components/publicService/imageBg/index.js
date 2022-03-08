import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ImageBg = () => {
  return (
    <section className={styles.insight}>
      {/* <div className={`${styles.wrapper} wrapper`}> */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.imgGrid}>
          <div className={styles.left}>
            {/* <img alt="" src="/images/half-img-1.png" /> */}
          </div>
          <div className={styles.right}>
            {/* <img alt="" src="/images/half-img-2.png" /> */}
          </div>
        </div>
      </ScrollAnimation>
      {/* </div> */}
    </section>
  );
};

export default ImageBg;
