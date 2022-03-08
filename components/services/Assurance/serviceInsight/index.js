import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceInsight = () => {
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.contactUsLine} `}>
          <div>
            <h4>Ready to realise your product vision?</h4>
          </div>
          <div className={`${styles.contactLink}`}>
            <span>Contact Us</span>
            <a href="/contact-us">
              <img alt="" src="/images/left-arrow-circle.svg" />
            </a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.wayGrid}>
          <div className={styles.left}>
            <h3>The Cloudfift way</h3>
            <p>
              CLOUDFIFTS’ expert product design team lives and breathes your
              concept gaining insights from key stakeholders and the market at
              large, so you can develop your idea with confidence.
            </p>
            <img alt="" src="/images/service-3.png" />
          </div>
          <div className={styles.right}>
            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>
            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>

            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>
            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>

            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>
            <div className={styles.gridItems}>
              <h5>Analysis and Scoping</h5>
              <p>
                We weave your objectives, milestones, expectations and budget
                together to create.
              </p>
            </div>
          </div>
        </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <h2>Insight</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.bubble}>
              <h3>Tech Disruption</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
              </p>
              <a href="/">Read More</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.bubble}>
                <h3>Digital Evolution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed
                  dui nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
                </p>
                <a href="/">Read More</a>
              </div>
              <div className={styles.img}></div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.img}></div>
              <div className={styles.bubble}>
                <h3>Simplifying complexity</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed
                  dui nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServiceInsight;
