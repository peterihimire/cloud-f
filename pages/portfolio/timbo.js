import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/timbo/hero";
import AboutOverview from "../../components/portfolioDetails/timbo/about-overview";
import Solution from "../../components/portfolioDetails/timbo/solution";
import Objectives from "../../components/portfolioDetails/timbo/objectives";
import Result from "../../components/portfolioDetails/timbo/result";
import CaseStudies from "../../components/portfolioDetails/timbo/caseStudies";

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
