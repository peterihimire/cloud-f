import React, { useState } from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const WhatYouGet = () => {
  const [clicked, setClicked] = useState(0);

  const toggler = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <section className={styles.cooperate}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <h2>What you get with Cloudfift</h2>

          <ul className={styles.accordion}>
            <li>
              <button onClick={() => toggler(0)}>
                <span>Engineering Team</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 0 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 0 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(1)}>
                <span>Smart Team</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 1 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 1 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(2)}>
                <span>Custom Software Development</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 2 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 2 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(3)}>
                <span>Custom Software Development</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 3 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 3 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(4)}>
                <span>Custom Software Development</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 4 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 4 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(5)}>
                <span>Custom Software Development</span>
                <span>
                  <i
                    className={`far fa-chevron-down ${
                      clicked === 5 && "fa-rotate-180"
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`${styles.content} ${clicked === 5 && styles.show}`}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.left}>
          <img alt="" src="/images/staffs-happy.png" loading="lazy" />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhatYouGet;
