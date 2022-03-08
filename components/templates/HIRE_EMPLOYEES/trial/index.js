import React from "react";
import styles from "./styles.module.scss";
import Input from "../../../ui/customInput";
import Textarea from "../../../ui/customTextarea";

const Trial = ({ content }) => {
  return (
    <section
      className={styles.trial}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url("${content.sectionImage}") no-repeat`,
      }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <h2>{content.sectionHeading1}</h2>
          <p>{content.sectionSynopsis}</p>
        </div>
        <div className={styles.right}>
          <form className={styles.contactForm}>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <Input
                  labelText="Full Name"
                  required
                  id="fullName"
                  placeholder="Add your name"
                  type="text"
                />
              </div>
              <div className={styles.formGroup}>
                <Input
                  labelText="Email Address"
                  required
                  id="email"
                  placeholder="example@text.com"
                  type="email"
                />
              </div>
              <div className={styles.formGroup}>
                <Input
                  labelText="Phone Number"
                  required
                  id="phone"
                  placeholder="Add your number"
                  type="text"
                />
              </div>
              <div className={styles.formGroup}>
                <Input
                  labelText="Company Name"
                  required
                  id="company"
                  placeholder="Add you company name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.textarea}>
              <Textarea labelText="Message" id="message" required />
            </div>
            <div className={styles.submitBtn}>
              <button className="btn-dark btn-medium">
                <span>Contact Us</span>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Trial;
