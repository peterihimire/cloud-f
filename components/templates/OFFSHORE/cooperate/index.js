import React from "react";
import styles from "./styles.module.scss";
import Nearsh1 from "../../../../public/images/nearsh1.svg";
import Nearsh2 from "../../../../public/images/nearsh2.svg";
import Nearsh3 from "../../../../public/images/nearsh3.svg";
import Nearsh4 from "../../../../public/images/nearsh4.svg";

const Cooperate = ({ content }) => {
  return (
    <section className={styles.cooperate}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            {content.sectionContents.slice(0, 2).map((cti, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <img src={cti.contentIcon} />
                  <h3>{cti.contentHeading}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p style={{ maxWidth: 500 }}>{cti.contentSynopsis}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.middle}>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
            <div>
              <img alt="" src="/images/Ellipse 62.png" />
            </div>
          </div>

          <div className={styles.right}>
            {content.sectionContents.slice(2, 4).map((cti, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <img src={cti.contentIcon} />
                  <h3>{cti.contentHeading}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p style={{ maxWidth: 500 }}>{cti.contentSynopsis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperate;
