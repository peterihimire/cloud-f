import React from "react";
import Layout from "../../../layouts/landing";
import Hero from "../../../components/aboutUsCsr/hero";
import Responsibility from "../../../components/aboutUsCsr/responsibility";
import WhatWeDo from "../../../components/aboutUsCsr/whatWeDo";
import Projects from "../../../components/aboutUsCsr/projects";

const Csr = () => {
  return (
    <>
      <Hero />
      <Responsibility />
      <WhatWeDo />
      <Projects />
    </>
  );
};

export default Csr;

Csr.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
