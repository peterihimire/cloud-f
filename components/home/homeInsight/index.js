import React from "react";
import styles from "./styles.module.scss";

const HomeInsight = () => {
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Insight</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.bubble}>
              <h3>Benefits of cloud computing</h3>
              <p>
                The inception of cloud computing has revolutionized the way
                businesses work and operate. Swiftly, one could start and manage
                a business by creating what is essentially a virtual office...
              </p>
              <a href="/">Read More</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.bubble}>
                <h3>Why Software Development is essential</h3>
                <p>
                  Modern society is rapidly undergoing digitalization. Consumers
                  are switching to smartphones and online platforms for their
                  requirements.
                </p>
                <a href="/">Read More</a>
              </div>
              <div className={styles.img}></div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.img}></div>
              <div className={styles.bubble}>
                <h3>How to mitigate security threats on Cloud</h3>
                <p>
                  Cloud computing is trending in the business world,
                  transforming the traditional way organizations operate and
                  handle data.
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInsight;
