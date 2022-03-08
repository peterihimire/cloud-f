import React from "react";
import styles from "./styles.module.scss";

const ServiceInsight = () => {
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
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

        <div className={styles.wayGrid}>
          <div className={styles.left}>
            <h3>The Cloudfift way</h3>
            <p>
              We at Cloudfift follow a very well thought-out set of standard
              operating procedures to execute our cloud consultation services.
              These procedures help us better understand your operational
              requirements and implement highly feasible, tailor-made solutions
              that suit the purpose. Our strategic approach is as follows:
            </p>
            <img alt="" src="/images/service-3.png" />
          </div>
          <div className={styles.right}>
            <div className={styles.gridItems}>
              <h5>Assessment</h5>
              <p>
                In this phase, we try to collect the know-how of your
                organisation. We understand your software requirements and
                discuss feasible solutions to help make your operations more
                efficient. We understand your expected return on investments,
                assess your industrial compatibilities and then discuss
                solutions that are in line with your business objectives.
              </p>
            </div>
            <div className={styles.gridItems}>
              <h5>Planning</h5>
              <p>
                The goal of this step is to design a specific roadmap, and a
                blueprint for your organisation to implement our
                recommendations. Our deployment plans, execution strategies,
                run-time, contingency plans and architectural designs are
                thought-out in this process. We try to analyse the pros and cons
                of every step, create a roadmap that brings software excellence
                to your organisation.
              </p>
            </div>

            <div className={styles.gridItems}>
              <h5>Deployment</h5>
              <p>
                After proper planning, consultation and designing, we go ahead
                with deploying the software solutions that transform the IT
                infrastructure of your organisations. We execute, migrate and
                expand your operations, and feed efficiency to your services.
              </p>
            </div>
            <div className={styles.gridItems}>
              <h5>Optimization</h5>
              <p>
                This process involves constantly monitoring, analyzing and
                improving the existing processes. We are always on the lookout
                for best practices and try to identify every corner where there
                is scope for improvement. We optimize the implemented systems to
                bring the best out of them.
              </p>
            </div>

            {/* <div className={styles.gridItems}>
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
            </div> */}
          </div>
        </div>

        <h2>Insight</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.bubble}>
              <h3>Benefits of cloud computing</h3>
              <p>
                The inception of cloud computing has revolutionized the way
                businesses work and operate. Swiftly, one could start and manage
                a business by creating...
              </p>
              <a href="/">Read More</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.bubble}>
                <h3>Why Software Development is essential</h3>
                <p>
                  Modern society is rapidly undergoing digitalization. Consumers
                  are switching to smartphones and online platforms for their
                  requirements.
                </p>
                <a href="/">Read More</a>
              </div>
              <div className={styles.img}></div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.img}></div>
              <div className={styles.bubble}>
                <h3>How to mitigate security threats on Cloud</h3>
                <p>
                  Cloud computing is trending in the business world,
                  transforming the traditional way organizations operate and
                  handle data...
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInsight;
