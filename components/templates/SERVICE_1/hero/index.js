import isEmpty from "is-empty";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import instance from "../../../../utils/axios";
import styles from "./styles.module.scss";

const Hero = ({ content, slug }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    instance
      .get("/menu-categories")
      .then((response) => {
        const menu = response.data.categories.filter(
          ({ slug }) => slug === "what-we-do"
        )[0].sub_categories;

        for (let i = 0; i < menu.length; i++) {
          const pages = menu[i].page;
          const qq = pages.filter((page) => page.slug === slug);
          if (qq.length > 0) {
            setRelated(pages.filter((page) => page.slug !== slug));
          }
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url("${content.contentImage}")` }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <h5>Services</h5>
        <h3>{content.contentHeading}</h3>
        <p>{content.contentSynopsis}</p>

        {isEmpty(related) || (
          <div className={styles.related}>
            <div>
              <h5>Related Solutions</h5>
              <ul>
                {related.slice(0, 4).map((rtd, idx) => (
                  <li key={idx}>
                    <Link href={`/${rtd.slug}`}>{rtd.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
