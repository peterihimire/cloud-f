import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import InsightCard from "../../ui/cards/insightCard";

SwiperCore.use([Pagination]);

const Post = () => {
  return (
    <section className={styles.post}>
      <div className={`${styles.wrapper} wrapper`}>
        <article className={styles.opening}>
          <h2>Disruptive Education Technologies</h2>
          <div className={styles.openingWrapper}>
            <div className={styles.openingText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in e irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className={styles.openingImage}>
              <img loading="lazy" alt="" src="/images/read1.png" />
            </div>
          </div>
        </article>

        <article className={styles.main}>
          <h2>Practices for e-learning in an Organization</h2>
          <div className={styles.mainImage}>
            <img loading="lazy" alt="" src="/images/read2.png" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>

        <article className={styles.subMain}>
          <h2>The Advantages of Custom e-learning Solutions</h2>
          <div className={styles.subMainWrapper}>
            <div className={styles.subMainImage}>
              <img loading="lazy" alt="" src="/images/read3.png" />
            </div>
            <div className={styles.subMainText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.closing}>
          <h3>How to Make the Most Use of Your MVP</h3>
          <ul>
            <li>
              <p>
                Track the behavior and patterns of your users. It is the best
                tactic to find out how users interact with your app and which
                possible stumbling blocks they face. Use Hotjar to get these
                insights firsthand.
              </p>
            </li>
            <li>
              <p>
                Listen to user feedback and research the suggested improvements
                for possible implementation. Most likely, your users will share
                their feedback with you. To make the most use of their
                suggestions, make sure to research and validate the ideas
                presented.
              </p>
            </li>
            <li>
              <p>
                Proceed with testing. An increased load on the app in use may
                lead to unexpected crashes. Keep track of your testing strategy
                to make sure your MVP will work well.
              </p>
            </li>
            <li>
              <p>
                Prioritize new features. We understand your desire to turn your
                MVP into a full-fledged solution as soon as possible. <br />{" "}
                However, at this stage, you have to add only the necessary
                features to improve the user experience without overloading the
                application
              </p>
            </li>
            <li>
              <p>
                Source:{" "}
                <a href="/">
                  https://archer-soft.com/blog/proof-concept-vs-prototype-vs-mvp-vs-pilot-plan-realize-your-idea
                </a>
              </p>
            </li>
          </ul>
        </article>

        <div className={styles.blogInfo}>
          <div className={styles.authorInfo}>
            <div className={styles.authorImage}>
              <img loading="lazy" alt="" src="/images/chris-palm.png" />
            </div>
            <div className={styles.authorRight}>
              <span className={styles.authorName}>By Chris Palm</span>
              <span className={styles.authorJob}>
                CLOUDFIFTS’ Head of Software
              </span>
            </div>
          </div>
          <div className={styles.postInfo}>
            <div>
              <p>
                Published: <span>June 27, 2021</span>
              </p>
            </div>
            <div>
              <p>
                Updated: <span>April 8, 2021</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.relatedPosts}>
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
        </div>
      </div>
    </section>
  );
};

export default Post;
