import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";

const Form = () => {
  return (
    <div className={styles.careerForm}>
      <h1>Career Center</h1>

      <p className={styles.lead}>
        Receive job alerts, insider news/tips, and personalize your site
        experience. See how we work at the heart of change to do incredible
        things. <span>Sign up</span> below.
      </p>

      <form>
        <div className={styles.formGroup}>
          <Input
            labelText="What’s your Email?"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Create a Password"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Create a password"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Confirm your password"
            type="password"
            name="confirm_pass"
            id="confirmPass"
            required
            placeholder="Confirm password"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="What should we call you?"
            type="text"
            name="full_name"
            id="fullName"
            required
            placeholder="Enter full name"
          />
        </div>
        <div className={styles.formGroup}>
          <Select labelText="Country" required id="country">
            <option>Nigeria</option>
          </Select>
        </div>
        <div className={styles.check}>
          <label>
            <input id="check" type="checkbox" />
            <span>
              I would prefer not to receive marketing messages from Cloudtician
            </span>
          </label>
        </div>
        <div className={styles.submitBtn}>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
