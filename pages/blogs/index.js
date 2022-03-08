import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/insights/hero";
import SortBlog from "../../components/insights/sort";

const Insights = () => {
  return (
    <>
      <Hero />
      <SortBlog />
    </>
  );
};

export default Insights;

Insights.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
