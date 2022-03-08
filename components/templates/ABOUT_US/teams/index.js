import React from "react";
import styles from "./styles.module.scss";

const Teams = ({ data }) => {
  return (
    <section className={styles.teams}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img alt="" src={data.sectionImage} />
        </div>

        <div className={styles.right}>
          <h2>{data.sectionHeading1}</h2>

          {data.sectionContents
            .slice(0, data.sectionContents.length - 1)
            .map((content, index) => (
              <p key={index}>{content.contentSynopsis}</p>
            ))}

          <div className={styles.info}>
            <p>
              {
                data.sectionContents[data.sectionContents.length - 1]
                  .contentSynopsis
              }
            </p>
          </div>

          <a
            href={
              data.sectionContents[data.sectionContents.length - 1]
                .contentCtaUrl
            }
          >
            <span>
              {
                data.sectionContents[data.sectionContents.length - 1]
                  .contentCtaText
              }
            </span>

            <span className={styles.arrow}>
              <i className="far fa-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teams;
