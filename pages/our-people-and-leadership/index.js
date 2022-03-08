import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/people&Leadership/hero";
import Culture from "../../components/people&Leadership/culture";
import Team from "../../components/people&Leadership/team";

const OurPeopleAndLeadership = () => {
  return (
    <>
      <Hero />
      <Culture />
      <Team />
    </>
  );
};

export default OurPeopleAndLeadership;

OurPeopleAndLeadership.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
