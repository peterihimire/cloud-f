import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import InsightCard from "../../ui/cards/insightCard";
import isEmpty from "is-empty";
import dateFormatter from "../../../utils/dateFormatter";

SwiperCore.use([Pagination]);

const PostTemplate = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title} - Cloudfift</title>
        <meta name="tag" content={data.tags.join(", ")} />
      </Head>

      <section className={styles.post}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: data.body }} />

          <div className={styles.blogInfo}>
            <div className={styles.authorInfo}>
              <div className={styles.authorImage}>
                <img loading="lazy" alt="" src="/images/chris-palm.png" />
              </div>
              <div className={styles.authorRight}>
                {!isEmpty(data.createdBy) && (
                  <span className={styles.authorName}>
                    By {data.createdBy.lastName} {data.createdBy.firstName}
                  </span>
                )}

                {/* <span className={styles.authorJob}>
                  CLOUDFIFTS’ Head of Software
                </span> */}
              </div>
            </div>
            <div className={styles.postInfo}>
              <div>
                <p>
                  Published: <span>{dateFormatter(data.createdAt)}</span>
                </p>
              </div>
              {/* <div>
                <p>
                  Updated: <span>April 8, 2021</span>
                </p>
              </div> */}
            </div>
          </div>

          {/* <div className={styles.relatedPosts}>
            <h2>Related Post</h2>

            <Swiper
              spaceBetween={29}
              slidesPerView={1}
              pagination={{
                el: ".custom-pag1",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className={`swiper-wrapper ${styles.slideWrapper}`}
            >
              <SwiperSlide>
                <div className={styles.grid}>
                  <InsightCard
                    alt=""
                    src="/images/read4.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                  <InsightCard
                    alt=""
                    src="/images/read5.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                  <InsightCard
                    alt=""
                    src="/images/read6.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.grid}>
                  <InsightCard
                    alt=""
                    src="/images/read4.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                  <InsightCard
                    alt=""
                    src="/images/read5.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                  <InsightCard
                    alt=""
                    src="/images/read6.png"
                    heading="Website Content: A Potent Weapon"
                    desc="Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do e"
                    date="August 3, 2018"
                    author="Chris Palm"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pag1"></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default PostTemplate;
