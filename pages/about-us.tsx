import { NextPage } from "next";
import AboutHeader from "../components/containers/AboutUs/AboutHeader";
import AboutOurMission from "../components/containers/AboutUs/AboutOurMission";
import OurTeam from "../components/containers/AboutUs/OurTeam";

const AboutUs: NextPage = () => {
  return (
    <div>
      <AboutHeader />
      <AboutOurMission />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
