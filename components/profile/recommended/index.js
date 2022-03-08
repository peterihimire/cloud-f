import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Recommended = () => {
  return (
    <div className={styles.recommended}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>RECOMMENDED JOBS</h1>
        <p className={styles.lead}>Here are some Jobs recommended for you</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Recommended;
