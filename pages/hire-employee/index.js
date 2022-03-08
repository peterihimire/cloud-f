import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/hireEmployee/hero";
import Delivery from "../../components/hireEmployee/delivery";
import Features from "../../components/hireEmployee/features";
import Analysis from "../../components/hireEmployee/analysis";
import Trial from "../../components/hireEmployee/trial";

const HireEmployee = () => {
  return (
    <>
      <Hero />
      <Delivery />
      <Features />
      <Analysis />
      <Trial />
    </>
  );
};

export default HireEmployee;

HireEmployee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
