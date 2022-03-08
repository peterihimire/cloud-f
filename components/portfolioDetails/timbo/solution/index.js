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
            src="/images/case-studies/timbo/MacBook-Pro-16-inch(2).png"
          />
        </div>

        <div className={styles.right}>
          <h2>THE SOLUTION</h2>
          <p>
            Timbo is a video conferencing application platform with the aim of
            changing how people fundamentally interact. This solution is focused
            on connecting people through frictionless video, voice, chat and
            content sharing and enables face-to-face video experiences for
            thousands of people across different locations and devices. AI
            technology will also be leveraged on to provide transcription of
            audio, count video attendees and provide insights into attendee
            engagement.
          </p>
          <br /> <br />
          <p>There are four available packages namely: </p>
          <ul>
            <li>
              <b> 1.</b> The Free version
            </li>
            <li>
              <b> 2.</b> Timbo Standard
            </li>
            <li>
              <b> 3.</b> Timbo Business
            </li>
            <li>
              <b> 4.</b> Timbo Enterprise
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
