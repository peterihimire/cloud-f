import React from "react";
import styles from "./style.module.scss";
import GridSvg from "../../../public/images/client1.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Client = () => {
  return (
    <section className={styles.client} id="our-process">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>How we work with our client</h2>

          {/* show for desktop only */}
          <div className={styles.gridImage}>
            <GridSvg />
          </div>

          {/* show for mobile */}
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>1</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Brief</h3>
                <p>Understanding the scope and nature of the project</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>2</span>
              </div>
              <div className={styles.cardBody}>
                <h3>UX Research</h3>
                <p>Understanding users needs and to validate the idea</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>3</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Understand & Brainstorm</h3>
                <p>Following industry - standard user research methods</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>4</span>
              </div>
              <div className={styles.cardBody}>
                <h3>UX Research</h3>
                <p>We keep an eye on the latest UI trends, design principles</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>5</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Sketch</h3>
                <p>Drawing sketches and wireframes to share our ideas</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>6</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Design</h3>
                <p>Turning the mockups and wireframes to great-looking images</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>7</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Implement</h3>
                <p>Implementation starts while the Design is in process</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>8</span>
              </div>
              <div className={styles.cardBody}>
                <h3>Evaluate</h3>
                <p>After this last stage, the process will iterate itself</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Client;
