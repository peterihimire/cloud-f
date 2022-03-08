import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhoWeAre = () => {
  return (
    <section className={styles.who}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.cards} wrapper`}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>01</div>
            <div className={styles.cardBody}>
              <h3>Hyperproof program</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam{" "}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <hr />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>02</div>
            <div className={styles.cardBody}>
              <h3>Checkpoint Security</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam{" "}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <hr />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>03</div>
            <div className={styles.cardBody}>
              <h3>Our Consultants</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam{" "}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <hr />
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <div className={styles.content}>
          <div className={styles.left}>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <img src="/images/about3.png" alt="" />
              <img src="/images/about4.png" alt="" />
            </ScrollAnimation>
          </div>

          <div className={styles.right}>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div>
                <h2>Who We Are</h2>
                <p className={styles.lead}>
                  We are in the business of solving problems. dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt
                </p>
                <p className={styles.text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt <br /> do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt s. <br /> <br />
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat
                  sunt ufwhiofwjow sunt do amet sint. Velit officia consequat duis
                  enim velit mollit. Exercitation veniam consequat sunt. <br />{" "}
                  <br /> sunt do amet sint. Velit officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt
                </p>
              </div>
            </ScrollAnimation>
          </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
