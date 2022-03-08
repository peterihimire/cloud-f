import React from "react";
import styles from "./styles.module.scss";

const ImageBg = ({ content }) => {
  console.log(content);
  return (
    <section className={styles.insight}>
      {/* <div className={`${styles.wrapper} wrapper`}> */}
      <div className={styles.imgGrid}>
        <div className={styles.left}>
          {/* <img alt="" src="/images/half-img-1.png" /> */}
        </div>
        <div className={styles.right}>
          {/* <img alt="" src="/images/half-img-2.png" /> */}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ImageBg;
