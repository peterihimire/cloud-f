import React from "react";
import Layout from "../../layouts/landing";
import AboutUsHero from "../../components/aboutUs/hero";
import WhoWeAre from "../../components/aboutUs/whoWeAre";
import Realise from "../../components/aboutUs/realise";
import WhatWeDo from "../../components/aboutUs/whatWeDo";
import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
import Teams from "../../components/aboutUs/teams";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <WhoWeAre />
      <Realise />
      <WhatWeDo />
      <WhyCloudfift />
      <Teams />
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
