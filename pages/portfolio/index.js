import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolio/hero";
import Content from "../../components/portfolio/content";

const Portfolio = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Portfolio;

Portfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
