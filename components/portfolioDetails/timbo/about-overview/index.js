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
                Timbo is a universal seamless way to integrate users to video
                conferencing, live meetings, safe, secure, and a highly digital
                interactive service which works on any platform which allows
                productivity at a low cost.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>DESCRIPTION</h3>
              <div className={styles.aboutInfo}>
                <div className={styles.infoLeft}>
                  <div>
                    <span>Industry:</span>
                    <span>COMMUNICATION</span>
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
                Timbo is an app that is designed to help users communicate
                freely via text, audio, and video calls. It is private and
                business-friendly with a unique feature that allows corporate
                firms host virtual meetings and creates banners displaying
                already created meetings where all participants could have
                meetings subsequently without creating a new link. The
                application enables users to chat during and after meetings and
                save recorded video calls. It comes in a simple but
                sophisticated appearance that makes usability easy.
              </p>
              <p>
                Timbo enables host or any participant share screen during
                corporate or team presentations a perfect virtual communication
                feature for corporate organizations.
              </p>
            </div>
            <div className={styles.overRight}>
              <img
                loading="lazy"
                alt=""
                src="/images/case-studies/timbo/MacBook-Pro-16-inch(1).png"
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
