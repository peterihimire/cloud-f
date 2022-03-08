import React from "react";
import styles from "./styles.module.scss";
import Nearsh1 from "../../../../public/images/nearsh1.svg";
import Nearsh2 from "../../../../public/images/nearsh2.svg";
import Nearsh3 from "../../../../public/images/nearsh3.svg";
import Nearsh4 from "../../../../public/images/nearsh4.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Cooperate = () => {
  return (
    <section className={styles.cooperate}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>How We Cooperate</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Nearsh1 />
                <h3>Dedcade Of Expertise</h3>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>DATA privacy regulation</li>
                  <li>Accessibilty Guildlines and best practices</li>
                  <li>Other platforms intergrations</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Nearsh2 />
                <h3>Engineering Team</h3>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>DATA privacy regulation</li>
                  <li>Accessibilty Guildlines and best practices</li>
                  <li>Other platforms intergrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.middle}>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Nearsh3 />
                <h3>Smart Team</h3>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>DATA privacy regulation</li>
                  <li>Accessibilty Guildlines and best practices</li>
                  <li>Other platforms intergrations</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Nearsh4 />
                <h3>Regulation Compliance</h3>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>DATA privacy regulation</li>
                  <li>Accessibilty Guildlines and best practices</li>
                  <li>Other platforms intergrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Cooperate;
