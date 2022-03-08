import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <section className={styles.services}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={styles.servicesAfter}>
          <div className={`${styles.wrapper} wrapper`}>
            <h2>OUR SERVICES</h2>

            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              condimentum netus vitae quis donec fames blandit elit.
            </p> */}

            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>
                    <img alt="" src="/images/phone.svg" />
                  </span>
                  <h5>Product Design</h5>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Cloudfift provides a broad range of services that help
                    businesses grow. Our team of skilled, diverse, and
                    well-recognized product designers assist clients in
                    accomplishing splendid results by delivering product design
                    consultations that go way beyond aesthetic and interface design.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/product-design" className="btn-transparent-dark btn-small">
                    Learn more
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>
                    <img alt="" src="/images/eye.svg" />
                  </span>
                  <h5>Research and Development</h5>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Cloudfift delivers R&D consulting services to companies in a
                    variety of sectors and businesses. Our services are tailored to
                    the needs and requirements of our clients.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/research-development" className="btn-transparent-dark btn-small">
                    Learn more
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>
                    <img alt="" src="/images/secured1.svg" />
                  </span>
                  <h5>Cloud Security</h5>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Our competent, resolute and committed crew at Cloudfift provide
                    world-class cloud security consulting services for clients
                    operating in diverse cloud environments.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/cloud-security" className="btn-transparent-dark btn-small">
                    Learn more
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>
                    <img alt="" src="/images/webapp.svg" />
                  </span>
                  <h5>MVP Planning & Strategy</h5>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Cloudfift offers our customers the most agile and capable MVP
                    plans and strategies for determining how their target consumers
                    react to and experience the critical functionality of their
                    product.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/mvp-planning" className="btn-transparent-dark btn-small">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.what}>
              <h3>What can we do for you?</h3>
              <a href="/product-design" className="btn-transparent btn-small">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;
