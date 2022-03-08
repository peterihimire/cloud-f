import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/kobotree/hero";
import AboutOverview from "../../components/portfolioDetails/kobotree/about-overview";
import Solution from "../../components/portfolioDetails/kobotree/solution";
import Objectives from "../../components/portfolioDetails/kobotree/objectives";
import Result from "../../components/portfolioDetails/kobotree/result";
import CaseStudies from "../../components/portfolioDetails/kobotree/caseStudies";

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
