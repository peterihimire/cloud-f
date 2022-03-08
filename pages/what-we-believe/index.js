import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/whatWeBelieve/hero";
import Believe from "../../components/whatWeBelieve/believe";
import Commitment from "../../components/whatWeBelieve/commitment";

const WhatWeBelieve = () => {
  return (
    <>
      <Hero />
      <Believe />
      <Commitment />
    </>
  );
};

export default WhatWeBelieve;

WhatWeBelieve.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
