import Hero from "./hero";
import OurClients from "./ourClients";
import Reviews from "./reviews";

const OurClientTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <OurClients content={data.template.sections[0]} />
      <Reviews content={data.template.sections[1]} />
    </>
  );
};

export default OurClientTemplate;
