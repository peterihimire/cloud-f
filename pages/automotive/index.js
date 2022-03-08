import React from "react";
import Layout from "../../layouts/landing";
import IndustriesAutomotiveHero from "../../components/industries/Automotive/hero";
import BuildingPartner from "../../components/industries/Automotive/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Automotive/solutionsDeveloped";
import TrustedBy from "../../components/industries/Automotive/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesAutomotiveHero />
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
