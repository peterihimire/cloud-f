import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import ScrollAnimation from 'react-animate-on-scroll';

const Content = () => {
  const content = useRef(null);

  const [currIndex, setCurrIndex] = useState(1);

  const [bg, setBg] = useState("portfolio1.png");

  const hover = (id) => {
    setCurrIndex(id);
  };

  useEffect(() => {
    switch (currIndex) {
      case 1:
        setBg("portfolio1.png");
        break;
      case 2:
        setBg("portfolio2.png");
        break;
      case 3:
        setBg("portfolio3.png");
        break;
      case 4:
        setBg("portfolio4.png");
        break;
      case 5:
        setBg("portfolio5.png");
        break;
      case 6:
        setBg("portfolio6.png");
        break;
      case 7:
        setBg("portfolio7.png");
        break;
      default:
        setBg("portfolio1.png");
    }
  }, [currIndex]);

  return (
    <section className={styles.content} ref={content}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={styles.wrapper}>
        <div
          className={styles.left}
          style={{
            background: `url('/images/${bg}')`,
            transition: "background 0.4s ease-in-out",
          }}
        ></div>

        <div className={styles.right}>
          <ul id="count-list">
            <li
              data-count="1"
              className={`${currIndex === 1 ? styles.active : ""}`}
              onMouseOver={() => hover(1)}
            >
              <div className={styles.info}>
                <h2>TIMBO</h2>
                <p>
                  Timbo is an app that is designed to help users communicate
                  freely via text, audio, and video calls. It is private and
                  business-friendly
                </p>
                <Link
                  href="/portfolio/timbo"
                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "timbo" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="2"
              className={`${currIndex === 2 ? styles.active : ""}`}
              onMouseOver={() => hover(2)}
            >
              <div className={styles.info}>
                <h2>KOBOFUNDME</h2>
                <p>
                  KoboFundMe is a crowdfunding app that is designed to help
                  users raise fund for their projects. The application enables
                  users to upload project
                </p>
                <Link
                  href="/portfolio/kobofundme"
                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "kobofundme" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="3"
              className={`${currIndex === 3 ? styles.active : ""}`}
              onMouseOver={() => hover(3)}
            >
              <div className={styles.info}>
                <h2>LIMPKIN</h2>
                <p>
                  Limpkin is a social media app that is designed to help users
                  share images and videos from memorable moments. It is private
                  and business-friendly
                </p>
                <Link
                  href="/portfolio/limpkin"
                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "limpkin" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="4"
              className={`${currIndex === 4 ? styles.active : ""}`}
              onMouseOver={() => hover(4)}
            >
              <div className={styles.info}>
                <h2>CLOUDTICIANS</h2>
                <p>
                  Cloudtician is an online training platform for people
                  interested in Information Technology. Most of the courses
                  offered prepare students to take
                </p>
                <Link
                  href="/portfolio/cloudticians"

                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "cloudticians" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="5"
              className={`${currIndex === 5 ? styles.active : ""}`}
              onMouseOver={() => hover(5)}
            >
              <div className={styles.info}>
                <h2>KOBOTREE</h2>
                <p>
                  KoboTree is a real estate investment app that is designed to
                  help users grow their finances through investment that
                  guarantees return
                </p>
                <Link
                  href="/portfolio/kobotree"

                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "kobotree" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="6"
              className={`${currIndex === 6 ? styles.active : ""}`}
              onMouseOver={() => hover(6)}
            >
              <div className={styles.info}>
                <h2>VINDOC</h2>
                <p>
                  Vindoc is a telemedicine application that allows
                  clients/patients to carry out online consultation with expert
                  physicians around
                </p>
                <Link
                  href="/portfolio/vindoc"

                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "vindoc" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>

            <li
              data-count="7"
              className={`${currIndex === 7 ? styles.active : ""}`}
              onMouseOver={() => hover(7)}
            >
              <div className={styles.info}>
                <h2>TUVO</h2>
                <p>
                  Tuvo app gives users the ability to bank however they want to
                  bank, it provides users the flexibility to store their money
                  in a wallet, transfer
                </p>
                <Link
                  href="/portfolio/tuvo"

                  // href={{
                  //   pathname: "/portfolio/[id]",
                  //   query: { id: "tuvo" },
                  // }}
                >
                  <a>LEARN MORE</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Content;
