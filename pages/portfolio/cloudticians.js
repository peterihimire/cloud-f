import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/portfolioDetails/cloudticians/hero";
import AboutOverview from "../../components/portfolioDetails/cloudticians/about-overview";
import Solution from "../../components/portfolioDetails/cloudticians/solution";
import Objectives from "../../components/portfolioDetails/cloudticians/objectives";
import Result from "../../components/portfolioDetails/cloudticians/result";
import CaseStudies from "../../components/portfolioDetails/cloudticians/caseStudies";

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
