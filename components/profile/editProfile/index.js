import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import Multiselect from "multiselect-react-dropdown";
import ScrollAnimation from 'react-animate-on-scroll';

const Index = () => {
  return (
    <div className={styles.edit}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>Welcome John Leiron</h1>
        <p className={styles.lead}>
          You can edit and update your profile here anyday, anytime
        </p>

        <div className={styles.formWrapper}>
          <form>
            <h2>Personal Details</h2>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <Input
                  labelText="First Name"
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="John"
                />
              </div>

              <div className={styles.formGroup}>
                <Input
                  labelText="Last Name"
                  id="lastName"
                  name="last_name"
                  type="text"
                  required
                  placeholder="Leiron"
                />
              </div>

              <div className={styles.formGroup}>
                <Select
                  labelText="Country"
                  id="country"
                  wrapClass={styles.selectWrap}
                  required
                  name="country"
                >
                  <option>U.S</option>
                </Select>
              </div>

              <div className={styles.formGroup}>
                <Select
                  labelText="State"
                  id="state"
                  wrapClass={styles.selectWrap}
                  required
                  name="state"
                >
                  <option>Houston</option>
                </Select>
              </div>

              <div className={styles.formGroup}>
                <Input
                  labelText="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Johnlerry@gmail.com"
                />
              </div>

              <div className={styles.formGroup}>
                <Input
                  labelText="Password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <h2>Job Preferences</h2>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <Select
                  labelText="What country would you like to work in?"
                  id="preferredCountry"
                  wrapClass={styles.selectWrap}
                  required
                  name="preferred_country"
                >
                  <option>England</option>
                </Select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="jobTitle">What’s your job title?</label>
                <Multiselect
                  placeholder="SELECT JOB TITLE"
                  isObject={false}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                    "Option 5",
                  ]}
                />
              </div>

              <div className={styles.formGroup}>
                <Select
                  labelText="What’s your years of experience?"
                  id="experience"
                  wrapClass={styles.selectWrap}
                  required
                  name="experience"
                >
                  <option>1</option>
                </Select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="industry">
                  What industries do you have experience in?
                </label>
                <Multiselect
                  placeholder="SELECT INDUSTRIES"
                  isObject={false}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                    "Option 5",
                  ]}
                />
              </div>
            </div>

            <div className={styles.submitBtn}>
              <button>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Index;
