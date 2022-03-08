import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/techExpertise/hero";
import Expertise from "../../components/techExpertise/expertise";
import Clients from "../../components/techExpertise/clients";

const TechAndExpertise = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Clients />
    </>
  );
};

export default TechAndExpertise;

TechAndExpertise.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
