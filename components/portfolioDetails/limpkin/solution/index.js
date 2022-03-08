import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Solution = () => {
  return (
    <section className={styles.solution}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <img
            loading="lazy"
            alt=""
            src="/images/case-studies/limpkin/Group-Post.png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>
          <p>
            Limpkin is a social media application that is aimed at helping its
            users share images and videos from memorable moments and also enable
            users communicate worldwide. It provides users with the ability to
            share, save and archive images and videos of themselves and other
            friends
          </p>
          <br /> <br />
          <p>The interactions on the application include: </p>
          <ul>
            <li>
              <b> 1.</b> Tagging of friends and families to pictures
            </li>
            <li>
              <b> 2.</b> Share business directly to contacts
            </li>
            <li>
              <b> 3.</b> Live streaming of videos
            </li>
          </ul>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.imageGroup} wrapper`}>
        <div>
          <img alt="" loading="lazy" src="/images/pd1.png" />
        </div>
        <div>
          <img alt="" loading="lazy" src="/images/pd2.png" />
        </div>
        <div>
          <img alt="" loading="lazy" src="/images/pd3.png" />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Solution;
