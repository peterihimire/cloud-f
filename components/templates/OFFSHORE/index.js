import ChooseService from "./chooseService";
import CloudfiftTeam from "./cloudfiftTeam";
import Cooperate from "./cooperate";
import Hero from "./hero";
import OffshoreService from "./offshoreService";
import OffshoreSuccess from "./offshoreSuccess";
import ProblemSolve from "./problemSolve";
import TrustedBy from "./trustedBy";
import WhatYouGet from "./whatYouGet";

const OffshoreTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <TrustedBy content={data.template.sections[0]} />
      <ProblemSolve content={data.template.sections[1]} />
      <CloudfiftTeam content={data.template.sections[2]} />
      <WhatYouGet content={data.template.sections[3]} />
      <OffshoreService content={data.template.sections[4]} />
      <Cooperate content={data.template.sections[5]} />
      <ChooseService content={data.template.sections[6]} />
      <OffshoreSuccess content={data.template.sections[7]} />
    </>
  );
};

export default OffshoreTemplate;
