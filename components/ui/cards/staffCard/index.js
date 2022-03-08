import React from "react";
import styles from "./styles.module.scss";

const StaffCard = ({ name, role, desc, src, alt }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img loading="lazy" alt={alt} src={src} />
      </div>
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{desc}</p>
      </div>
      <div className={styles.cardFooter}>
        <a href="/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default StaffCard;
