import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/vindoc/hero";
import AboutOverview from "../../components/portfolioDetails/vindoc/about-overview";
import Solution from "../../components/portfolioDetails/vindoc/solution";
import Objectives from "../../components/portfolioDetails/vindoc/objectives";
import Result from "../../components/portfolioDetails/vindoc/result";
import CaseStudies from "../../components/portfolioDetails/vindoc/caseStudies";

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
