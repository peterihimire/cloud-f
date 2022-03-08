import React from "react";
import styles from "./styles.module.scss";
import WorkWith from "./workWith";

const Clients = ({ content }) => {
  return (
    <WorkWith
      sectionClass={styles.clients}
      wrapperClass={styles.wrapper}
      heading={content.sectionHeading1}
      content={content}
    />
  );
};

export default Clients;
