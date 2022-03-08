import React from "react";
import Layout from "../../layouts/career";
import CareerCenterForm from "../../components/careerCenter";
import ScrollAnimation from 'react-animate-on-scroll';

const CareerCenter = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <CareerCenterForm />
      </ScrollAnimation>
    </>
  );
};

export default CareerCenter;

CareerCenter.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
