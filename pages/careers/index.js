import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/career/hero";
import WhyJoin from "../../components/career/whyJoin";
import Connected from "../../components/career/connected";

const Career = () => {
  return (
    <>
      <Hero />
      <WhyJoin />
      <Connected />
    </>
  );
};

export default Career;

Career.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
