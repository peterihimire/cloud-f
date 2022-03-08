import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/limpkin/hero";
import AboutOverview from "../../components/portfolioDetails/limpkin/about-overview";
import Solution from "../../components/portfolioDetails/limpkin/solution";
import Objectives from "../../components/portfolioDetails/limpkin/objectives";
import Result from "../../components/portfolioDetails/limpkin/result";
import CaseStudies from "../../components/portfolioDetails/limpkin/caseStudies";

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
