import Teams from "../../aboutUs/teams";
import AboutUsHero from "./hero";
import Realise from "./realise";
// import Teams from "./teams";
import WhatWeDo from "./whatWeDo";
import WhoWeAre from "./whoWeAre";
import WhyCloudfift from "./whyCloudfift";

const AboutUsTemplate = ({ data }) => {
  return (
    <>
      <AboutUsHero data={data.template.heroSection} />
      <WhoWeAre data={[data.template.sections[0], data.template.sections[1]]} />
      <Realise data={data.template.sections[2].sectionContents[0]} />
      <WhatWeDo data={[data.template.sections[3], data.template.sections[4]]} />
      <WhyCloudfift data={data.template.sections[5]} />
      {/* <Teams data={data.template.sections[6]} /> */}
      <Teams />
    </>
  );
};

export default AboutUsTemplate;
