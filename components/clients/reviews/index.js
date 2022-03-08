import React from "react";
import styles from "./styles.module.scss";
import WorkWith from "../../home/workWith";

const Reviews = () => {
  return (
    <WorkWith
      sectionClass={styles.reviews}
      wrapperClass={styles.wrapper}
      heading="What Our 
  Clients Are Saying"
    />
  );
};

export default Reviews;
