import AboutHeader from "../components/containers/AboutUs/AboutHeader";
import AboutOurMission from "../components/containers/AboutUs/AboutOurMission";
import OurTeam from "../components/containers/AboutUs/OurTeam";
import { getAboutusInformation } from "../firebase/functions/aboutus"

const AboutUs = ({ data }:any) => {
  return (
    <div>
      <AboutHeader data={ data.header.data } />
      <AboutOurMission missionData={ data.ourMission.data }/>
      <OurTeam ourTeamData={data.ourTeam.data} />
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getAboutusInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default AboutUs;
