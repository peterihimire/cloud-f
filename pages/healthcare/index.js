import React from "react";
import Layout from "../../layouts/landing";
import IndustriesHealthcareHero from "../../components/industries/Healthcare/hero";
import BuildingPartner from "../../components/industries/Healthcare/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Healthcare/solutionsDeveloped";
import TrustedBy from "../../components/industries/Healthcare/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesHealthcareHero />
      <BuildingPartner />
      <SolutionsDeveloped />
      <TrustedBy />
    </>
  );
};

export default IndustiesFintech;

IndustiesFintech.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
