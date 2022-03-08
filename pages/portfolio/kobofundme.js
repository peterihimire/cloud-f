import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/kobofundme/hero";
import AboutOverview from "../../components/portfolioDetails/kobofundme/about-overview";
import Solution from "../../components/portfolioDetails/kobofundme/solution";
import Objectives from "../../components/portfolioDetails/kobofundme/objectives";
import Result from "../../components/portfolioDetails/kobofundme/result";
import CaseStudies from "../../components/portfolioDetails/kobofundme/caseStudies";

const PortfolioDetails = () => {
  return (
    <>
      <Hero />
      <AboutOverview />
      <Solution />
      <Objectives />
      <Result />
      <CaseStudies />
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   const courseProps = {
//     title: query.title,
//     rating: query.rating,
//     enrolls: query.enrolls,
//   };

//   return {
//     props: { courseProps },
//   };
// }

export default PortfolioDetails;

PortfolioDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
