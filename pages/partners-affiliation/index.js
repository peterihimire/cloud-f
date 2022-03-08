import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/partnersAffiliation/hero";
import Partners from "../../components/partnersAffiliation/partners";

const PartnersAffiliation = () => {
  return (
    <>
      <Hero />
      <Partners />
    </>
  );
};

export default PartnersAffiliation;

PartnersAffiliation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
