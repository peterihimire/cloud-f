import ApproachProblem from "./approachProblem";
import HelpYou from "./helpYou";
import Hero from "./hero";
import CaseStudies from "./caseStudies";
import ServiceInsight from "./serviceInsight";

const Service_1Template = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} slug={data.slug} />
      <ApproachProblem />
      <HelpYou />
      <CaseStudies />
      <ServiceInsight />
    </>
  );
};

export default Service_1Template;
