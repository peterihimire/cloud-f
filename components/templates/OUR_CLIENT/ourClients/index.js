import React from "react";
import styles from "./styles.module.scss";

const OurClients = ({ content }) => {
  return (
    <section className={styles.ourClients}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Our Clients</h2>

        <div className={styles.grid}>
          {content.sectionContents.map((cti, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src={cti.contentImage} height={50} />
                </div>
                <p>{cti.contentSynopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
