import React from "react";
import styles from "./styles.module.scss";
import WorkWith from "../../home/workWith";

const Clients = () => {
  return (
    <WorkWith
      sectionClass={styles.clients}
      wrapperClass={styles.wrapper}
      heading="What Our 
  Clients Are Saying"
    />
  );
};

export default Clients;
