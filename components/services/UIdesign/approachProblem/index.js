import React, { useState } from "react";
import styles from "./styles.module.scss";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ApproachProblem = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="oDKQYqkmySA"
        onClose={() => setOpen(false)}
      /> */}
      <section className={styles.insight}>
        <div className={`${styles.wrapper} wrapper`}>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className={styles.approach}>
              <h2>Our approach to solving problems</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Lorem ipsum amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Lorem ipsum amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. m amet minim mollit non deserunt ullamco
                est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit.
              </p>
              <a href="/" className={styles.readmore}>
                Read More
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className={styles.vid}>
              {/* <img
                src="/images/service-1.png"
                alt="video 1"
                width="100%"
                onClick={() => setOpen(true)}
              /> */}
              <img src="/images/service-1.png" alt="arrow-left-circle" />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default ApproachProblem;