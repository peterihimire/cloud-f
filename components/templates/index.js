import AboutUsTemplate from "./ABOUT_US";
import CSRTemplate from "./CSR";
import HireEmployees from "./HIRE_EMPLOYEES";
import HowWeWorkTemplate from "./HOW_WE_WORK";
import IndustriesTemplate from "./INDUSTRIES";
import OffshoreTemplate from "./OFFSHORE";
import PortfolioTemplate from "./PORTFOLIO";
import Services_2Template from "./SERVICE_2";
import TechAndExpertiseTemplate from "./TECH_AND_EXPERTISE";
import PublicServiceTemplate from "./PUBLIC_SERVICE";
import OurClientTemplate from "./OUR_CLIENT";
import Service_1Template from "./SERVICE_1";

const Templates = ({ data }) => {
  // choose template from data
  const chooseTemplate = (template) => {
    switch (template) {
      case "ABOUT_US":
        template = <AboutUsTemplate data={data} />;
        break;

      case "HOW_WE_WORK":
        template = <HowWeWorkTemplate data={data} />;
        break;

      case "CSR":
        template = <CSRTemplate data={data} />;
        break;

      case "HIRE_EMPLOYEES":
        template = <HireEmployees data={data} />;
        break;

      case "SERVICE_1": // Services template
        template = <Service_1Template data={data} />;
        break;

      case "SERVICE_2": // What we believe
        template = <Services_2Template data={data} />;
        break;

      case "INDUSTRIES":
        template = <IndustriesTemplate data={data} />;
        break;

      case "PORTFOLIO":
        template = <PortfolioTemplate data={data} />;
        break;

      case "TECH_AND_EXPERTISE":
        template = <TechAndExpertiseTemplate data={data} />;
        break;

      case "OFFSHORE":
        template = <OffshoreTemplate data={data} />;
        break;

      case "PUBLIC_SERVICE":
        template = <PublicServiceTemplate data={data} />;
        break;

      case "OUR_CLIENT":
        template = <OurClientTemplate data={data} />;
        break;

      default:
        break;
    }

    return template;
  };

  return chooseTemplate(data.template.name);
};

export default Templates;
