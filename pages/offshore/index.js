import React from "react";
import Layout from "../../layouts/landing";
import IndustriesOffshoreHero from "../../components/industries/Offshore/hero";
import ProblemSolve from "../../components/industries/Offshore/problemSolve";
import CloudfiftTeam from "../../components/industries/Offshore/cloudfiftTeam";
import WhatYouGet from "../../components/industries/Offshore/whatYouGet";
import TrustedBy from "../../components/industries/Offshore/trustedBy";
import OffshoreService from "../../components/industries/Offshore/offshoreService";
import PartnerOffshore from "../../components/industries/Offshore/partnerOffshore";
import ChooseService from "../../components/industries/Offshore/chooseService";
import OffshoreSuccess from "../../components/industries/Offshore/offshoreSuccess";
import Cooperate from "../../components/industries/Offshore/cooperate";

const IndustriesOffshore = () => {
  return (
    <>
      <IndustriesOffshoreHero />
      <TrustedBy />
      <ProblemSolve />
      <CloudfiftTeam />
      <WhatYouGet />
      <OffshoreService />
      <Cooperate />
      <PartnerOffshore />
      <ChooseService />
      <OffshoreSuccess />
    </>
  );
};

export default IndustriesOffshore;

IndustriesOffshore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
