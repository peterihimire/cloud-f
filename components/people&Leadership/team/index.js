import React from "react";
import styles from "./styles.module.scss";
import StaffCard from "../../ui/cards/staffCard";
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
  return (
    <section className={styles.team}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Meet The Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={styles.grid}>
          <StaffCard
            name="Beauty Lane"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team1.png"
          />
          <StaffCard
            name="Bob Josh"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team2.png"
          />
          <StaffCard
            name="Sam Daveson"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team3.png"
          />
          <StaffCard
            name="Rose Wells"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team4.png"
          />
          <StaffCard
            name="Mina Chytan"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team5.png"
          />
          <StaffCard
            name="Orlean Dwyer"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team6.png"
          />
          <StaffCard
            name="Cindy Liu"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team7.png"
          />
          <StaffCard
            name="West Allen"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team8.png"
          />
          <StaffCard
            name="Wells bloom"
            role="Product Manager"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            alt=""
            src="/images/team9.png"
          />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Team;
