import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Content = ({ content }) => {
  const contentRef = useRef(null);

  const [currIndex, setCurrIndex] = useState(1);

  const [bg, setBg] = useState(content.sectionContents[0].contentImage);

  const hover = (id) => {
    setCurrIndex(id);
  };

  useEffect(() => {
    const nbg = content.sectionContents[currIndex - 1].contentImage;
    setBg(nbg);
  }, [currIndex]);

  return (
    <section className={styles.content} ref={contentRef}>
      <div className={styles.wrapper}>
        <div
          className={styles.left}
          style={{
            background: `url(${bg})`,
            transition: "background 0.4s ease-in-out",
          }}
        ></div>

        <div className={styles.right}>
          <ul id="count-list">
            {content.sectionContents.map((cti, idx) => (
              <li
                data-count={`${idx + 1}`}
                className={`${currIndex === idx + 1 ? styles.active : ""}`}
                onMouseOver={() => hover(idx + 1)}
                key={idx}
              >
                <div className={styles.info}>
                  <h2>{cti.contentHeading}</h2>
                  <p>{cti.contentSynopsis}</p>
                  <Link href={cti.contentCtaUrl}>
                    <a>{cti.contentCtaText}</a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
