import React from "react";
import styles from "./style.module.scss";
import GridSvg from "../../../../public/images/client1.svg";

const Client = ({ content }) => {
  return (
    <section className={styles.client} id="our-process">
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

        {/* show for desktop only */}
        <div className={styles.gridImage}>
          <GridSvg />
        </div>

        {/* show for mobile */}
        <div className={styles.grid}>
          {content.sectionContents.map((ct, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span>{idx + 1}</span>
              </div>
              <div className={styles.cardBody}>
                <h3>{ct.contentHeading}</h3>
                <p>{ct.contentSynopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
