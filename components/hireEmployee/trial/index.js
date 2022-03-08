import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";
import ScrollAnimation from 'react-animate-on-scroll';

const Trial = () => {
  return (
    <section className={styles.trial}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.left}>
            <h2>GET STARTED WITH 2 WEEKS RISK FREE TRIAL</h2>
            <p>
              You might already know what you’re looking for, we can make it come
              to live. Even you don’t know yet we’re great dectetives. <br /> All
              your idea are procted by NDA
            </p>
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
      </ScrollAnimation>
    </section>
  );
};

export default Trial;
