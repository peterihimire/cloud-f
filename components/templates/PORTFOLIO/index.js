import Content from "./content";
import Hero from "./hero";

const PortfolioTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <Content content={data.template.sections[0]} />
    </>
  );
};

export default PortfolioTemplate;
