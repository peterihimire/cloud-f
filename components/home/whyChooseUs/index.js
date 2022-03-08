import React from "react";
import styles from "./styles.module.scss";
import Arrow from "../../../public/images/Arrow2.svg";
import DashShort from "../../../public/images/Line 4.svg";

const WhyChooseUs = () => {
  return (
    <section className={styles.whychoose}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <h2>Why Choose Us?</h2>
          <p>
            We at Cloudfift are committed to providing tailor-made solutions to
            all your business requirements. Our services pave the way for the
            digital transformation of your organization. With a competent team
            and resolute attitude, we offer state-of- the-art consultation
            services that help you make better decisions.
          </p>
          <ul className={styles.step}>
            <li>
              <div>
                <Arrow /> <span>Our Story</span>
              </div>
            </li>
            <li>
              <div>
                <DashShort /> <span>Our Services</span>
              </div>
            </li>
            <li>
              <div>
                <DashShort /> <span>Our Products</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <div className={styles.letters}>A</div>
              <div className={styles.content}>
                <h3>Diverse Portfolio</h3>
                <p>
                  We offer a diverse portfolio of cloud services. From
                  visualization of software to transformation, & from analytics
                  to big data, we are a one-stop destination for all your cloud
                  needs.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.letters}>B</div>
              <div className={styles.content}>
                <h3>Motivated Team of Experts</h3>
                <p>
                  Our highly motivated team of developers, architects and
                  engineers are committed to creating a culture of software
                  excellence. We are dedicated to offering intelligent software
                  solutions at reasonable prices to help modernize and automate
                  your businesses.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.letters}>C</div>
              <div className={styles.content}>
                <h3>Multi-Disciplinary Experience</h3>
                <p>
                  At Cloudfift, we specialize in catering to businesses across a
                  range of industries. Our expertise in a deep understanding of
                  enterprise requirements, coupled with our usage of
                  state-of-the-art technologies enable us to deliver solutions
                  that simplify businesses and boost profits.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.letters}>D</div>
              <div className={styles.content}>
                <h3>Systematic Approach</h3>
                <p>
                  Our consulting services offer a holistic resolution to
                  business complexities. We strategize, plan, implement and
                  manage software projects, however complex and tight-deadlined
                  they may be. We enjoy challenges. From marketing to finances,
                  and telecom to logistics, we've got you covered.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.letters}>E</div>
              <div className={styles.content}>
                <h3>In-Depth Understanding</h3>
                <p>
                  We specialize in understanding your business requirements,
                  identifying anomalies, and offering highly customized
                  solutions using the finest architecture, and technology - the
                  industry has to offer.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
