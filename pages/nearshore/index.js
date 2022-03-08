import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/industries/Nearshore/hero";
import ProblemSolve from "../../components/industries/Nearshore/problemSolve";
import CloudfiftTeam from "../../components/industries/Nearshore/cloudfiftTeam";
import WhatYouGet from "../../components/industries/Nearshore/whatYouGet";
import TrustedBy from "../../components/industries/Nearshore/trustedBy";
import NearshoreService from "../../components/industries/Nearshore/nearshoreService";
import PartnerNearshore from "../../components/industries/Nearshore/partnerNearshore";
import ChooseService from "../../components/industries/Nearshore/chooseService";
import NearshoreSuccess from "../../components/industries/Nearshore/nearshoreSuccess";
import Cooperate from "../../components/industries/Nearshore/cooperate";

const IndustriesNearshore = () => {
  return (
    <>
      <IndustriesNearshoreHero />
      <TrustedBy />
      <ProblemSolve />
      <CloudfiftTeam />
      <WhatYouGet />
      <NearshoreService />
      <Cooperate />
      <PartnerNearshore />
      <ChooseService />
      <NearshoreSuccess />
    </>
  );
};

export default IndustriesNearshore;

IndustriesNearshore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
