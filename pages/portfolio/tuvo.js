import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/tuvo/hero";
import AboutOverview from "../../components/portfolioDetails/tuvo/about-overview";
import Solution from "../../components/portfolioDetails/tuvo/solution";
import Objectives from "../../components/portfolioDetails/tuvo/objectives";
import Result from "../../components/portfolioDetails/tuvo/result";
import CaseStudies from "../../components/portfolioDetails/tuvo/caseStudies";

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
