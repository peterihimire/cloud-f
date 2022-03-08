import React from "react";
import styles from "./styles.module.scss";
import ReactTooltip from "react-tooltip";

const WorkWith = ({ sectionClass, heading, wrapperClass, content }) => {
  return (
    <section
      className={`${styles.workWith} ${sectionClass ? sectionClass : ""}`}
    >
      <div
        className={`${styles.wrapper} wrapper ${
          wrapperClass ? wrapperClass : ""
        }`}
      >
        <div className={styles.first}>
          {content.sectionContents.slice(0, 3).map((cti, idx) => (
            <img
              key={idx}
              alt=""
              src={cti.contentImage}
              data-tip
              data-for="testimony1"
              loading="lazy"
              style={{ maxWidth: 300, borderRadius: 10 }}
            />
          ))}
        </div>

        <div className={styles.second}>
          {content.sectionContents.slice(3, 4).map((cti, idx) => (
            <img
              key={idx}
              alt=""
              src={cti.contentImage}
              data-tip
              data-for="testimony1"
              loading="lazy"
              style={{ maxWidth: 300, borderRadius: 10 }}
            />
          ))}
          <div>
            <h2>{heading}</h2>
            <p>{content.sectionSynopsis}</p>
          </div>
          {content.sectionContents.slice(4, 5).map((cti, idx) => (
            <img
              key={idx}
              alt=""
              src={cti.contentImage}
              data-tip
              data-for="testimony1"
              loading="lazy"
              style={{ maxWidth: 300, borderRadius: 10 }}
            />
          ))}
        </div>

        <div className={styles.third}>
          {content.sectionContents.slice(5, 8).map((cti, idx) => (
            <img
              key={idx}
              alt=""
              src={cti.contentImage}
              data-tip
              data-for="testimony1"
              loading="lazy"
              style={{ maxWidth: 300, borderRadius: 10 }}
            />
          ))}
        </div>
      </div>

      <ReactTooltip
        place="top"
        type="dark"
        effect="float"
        id="testimony1"
        className={styles.tooltip}
      >
        <div className={styles.testimony}>
          <div className={styles.quoteIcon}>
            <i className="fas fa-quote-left"></i>
          </div>
          <div className={styles.testimonyText}>
            <p>
              Our highly customised cloud services begin by thoroughly analyzing
              your software requirements, enterprise challenges, business
              operations, long-term goals and anomalous loopholes. We then
              tailor highly feasible software solutions which are dedicated to
              bringing about transformational shifts at your organisation.
            </p>
          </div>
          <div className={styles.reviewer}>
            <p>Lucky Onoriode</p>
            <p>CEO, Cloudfift </p>
          </div>
        </div>
      </ReactTooltip>
    </section>
  );
};

export default WorkWith;
