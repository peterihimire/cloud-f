import React from "react";
import Layout from "../../layouts/landing";
import IndustriesMediaHero from "../../components/industries/Media/hero";
import BuildingPartner from "../../components/industries/Media/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Media/solutionsDeveloped";
import TrustedBy from "../../components/industries/Media/trustedBy";


const IndustiesFintech = () => {
  return (
    <>
      <IndustriesMediaHero />
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
