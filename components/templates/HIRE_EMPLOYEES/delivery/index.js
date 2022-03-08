import React from "react";
import styles from "./styles.module.scss";
import Video from "../../../ui/customVideo";

const Delivery = ({ content }) => {
  return (
    <section className={styles.delivery}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>{content.sectionHeading1}</h2>

        <div className={styles.content}>
          <div className={styles.left}>
            <p>{content.sectionSynopsis}</p>
            <ul>
              {content.sectionContents
                .slice(0, content.sectionContents.length - 1)
                .map((ct, idx) => (
                  <li key={idx}>
                    <p>{ct.contentSynopsis}</p>
                  </li>
                ))}
            </ul>

            <a
              href={
                content.sectionContents[content.sectionContents.length - 1]
                  .contentCtaUrl
              }
              className="btn-medium"
            >
              {
                content.sectionContents[content.sectionContents.length - 1]
                  .contentCtaText
              }
            </a>
          </div>

          <div className={styles.right}>
            <Video wrapperClass={styles.deliveryVideo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
