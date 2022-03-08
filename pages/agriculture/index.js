import React from "react";
import Layout from "../../layouts/landing";
import IndustriesAgricHero from "../../components/industries/Agriculture/hero";
import BuildingPartner from "../../components/industries/Agriculture/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Agriculture/solutionsDeveloped";
import TrustedBy from "../../components/industries/Agriculture/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesAgricHero />
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
