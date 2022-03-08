import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/howWeWork/hero";
import WhatYouGet from "../../components/howWeWork/whatYouGet";
import Client from "../../components/howWeWork/client";
import Cooperate from "../../components/howWeWork/cooperate";
import WhatWeDo from "../../components/howWeWork/whatWeDo";

const HowWeWork = () => {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <Client />
      <Cooperate />
      <WhatWeDo />
    </>
  );
};

export default HowWeWork;

HowWeWork.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
