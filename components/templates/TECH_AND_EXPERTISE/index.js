import Clients from "./clients";
import Expertise from "./expertise";
import Hero from "./hero";

const TechAndExpertiseTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <Expertise content={data.template.sections.slice(0, 3)} />
      <Clients content={data.template.sections[3]} />
    </>
  );
};

export default TechAndExpertiseTemplate;
