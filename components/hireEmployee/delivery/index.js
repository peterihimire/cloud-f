import React from "react";
import styles from "./styles.module.scss";
import Video from "../../ui/customVideo";
import ScrollAnimation from 'react-animate-on-scroll';

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <h2>A Unique Delivery Model</h2>

          <div className={styles.content}>
            <div className={styles.left}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia.
              </p>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
              </ul>
              <a href="/" className="btn-medium">
                HIRE DEVELOPERS
              </a>
            </div>

            <div className={styles.right}>
              <Video wrapperClass={styles.deliveryVideo} />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Delivery;
