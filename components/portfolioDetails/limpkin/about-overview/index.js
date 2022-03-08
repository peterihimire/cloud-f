import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutOverview = () => {
  return (
    <div className={styles.aboutoverview}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <section className={styles.about}>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutLeft}>
              <h2>ABOUT THE CLIENT</h2>
              <p>
                Limpkin is an app that is designed to enable users Instantly
                message, upload Images and Videos etc. through One-on-One
                Messaging and Group Chat, Chat Rooms.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>DESCRIPTION</h3>
              <div className={styles.aboutInfo}>
                <div className={styles.infoLeft}>
                  <div>
                    <span>Industry:</span>
                    <span>SOCIAL MEDIA</span>
                  </div>
                  <div>
                    <span>Location:</span>
                    <span>WORLDWIDE</span>
                  </div>
                </div>
                <div className={styles.infoRight}>
                  <div>
                    <span>Client Since:</span>
                    <span>2021</span>
                  </div>
                  <div>
                    <span>Status:</span>
                    <span>COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className={styles.aboutActions}>
                <button>Product Design</button>
                <button>UX Research</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.overview}>
          <div className={styles.overviewWrapper}>
            <div className={styles.overLeft}>
              <h2>PROJECT OVERVIEW</h2>
              <p>
                Limpkin is a social media app that is designed to help users
                share images and videos from memorable moments. It is private
                and business-friendly with a unique feature that allows
                individuals to share, save, archive images and videos of
                themselves and other friends in the platform. The application
                enables users to comment on posts and chat with other users. It
                comes in a simple but sophisticated appearance that makes
                usability easy. Limpkin enables private and corporate
                organizations to manage their account and connect with others.
                Limpkin allows users to communicate with different people from
                the part of the world.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/limpkin/Three-Mobile.png"
              />
            </div>
          </div>
        </section>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutOverview;
