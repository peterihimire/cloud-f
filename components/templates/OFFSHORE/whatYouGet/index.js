import React, { useState } from "react";
import styles from "./styles.module.scss";

const WhatYouGet = ({ content }) => {
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
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <h2>{content.sectionHeading1}</h2>

          <ul className={styles.accordion}>
            {content.sectionContents.map((cti, idx) => (
              <li key={idx}>
                <button onClick={() => toggler(idx)}>
                  <span>{cti.contentHeading}</span>
                  <span>
                    <i
                      className={`far fa-chevron-down ${
                        clicked === idx && "fa-rotate-180"
                      }`}
                    ></i>
                  </span>
                </button>
                <div
                  className={`${styles.content} ${
                    clicked === idx && styles.show
                  }`}
                >
                  <p>{cti.contentSynopsis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.left}>
          <img alt="" src={content.sectionImage} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
