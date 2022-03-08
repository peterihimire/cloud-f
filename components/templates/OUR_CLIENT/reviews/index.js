import React from "react";
import WorkWith from "../../TECH_AND_EXPERTISE/clients/workWith";
import styles from "./styles.module.scss";

const Reviews = ({ content }) => {
  return (
    <WorkWith
      sectionClass={styles.reviews}
      wrapperClass={styles.wrapper}
      heading={content.sectionHeading1}
      content={content}
    />
  );
};

export default Reviews;
