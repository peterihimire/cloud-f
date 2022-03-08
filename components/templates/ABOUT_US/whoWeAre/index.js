import React from "react";
import styles from "./styles.module.scss";

const WhoWeAre = ({ data }) => {
  return (
    <section className={styles.who}>
      <div className={`${styles.cards} wrapper`}>
        {data[0].sectionContents.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>0{idx + 1}</div>
            <div className={styles.cardBody}>
              <h3>{card.contentHeading}</h3>
              <p>{card.contentSynopsis}</p>
            </div>
            <div className={styles.cardFooter}>
              <hr />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <img src={data[1].sectionImage} alt="" />
          <img src={data[1].sectionImage} alt="" />
        </div>

        <div className={styles.right}>
          <div>
            <h2>{data[1].sectionContents[0].contentHeading}</h2>

            {data[1].sectionContents.map((para, idx) => (
              <p key={idx} className={idx === 0 ? styles.lead : styles.text}>
                {para.contentSynopsis}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
