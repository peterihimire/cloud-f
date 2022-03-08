import isEmpty from "is-empty";
import React, { useState } from "react";
import dateFormatter from "../../../../utils/dateFormatter";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useMemo } from "react";
import instance from "../../../../utils/axios";
import { useEffect } from "react";

const InsightCard = ({ alt, src, heading, desc, date, author, url }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    instance
      .get(`/gallery/${src}`)
      .then(({ data }) => {
        setImage(data.message.data.imageName);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          loading="lazy"
          alt={alt}
          src={`https://cloudfift-img-bucket.s3.amazonaws.com/${image}`}
        />
      </div>
      <div className={styles.cardBody}>
        <h4>{heading}</h4>
        <p>{desc}</p>
        <Link href={url}>Read More</Link>
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.date}>Posted on {dateFormatter(date)}</p>
        <p className={styles.author}>
          {isEmpty(author) || (
            <>
              By <Link href="/">{author}</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
