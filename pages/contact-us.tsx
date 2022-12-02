import ContactHeader from "../components/containers/Contact/ContactHeader";
import GetInTouchForm from "../components/containers/Contact/GetInTouchForm";
import MoreWaysToContact from "../components/containers/Contact/MoreWaysToContact";
import { getContactInformation } from "../firebase/functions/contact"

const ContactUs = ({ data }:any) => {
  return (
    <div>
      <ContactHeader data={data.header.data}/>
      <GetInTouchForm getInTouchData={data.getInTouch.data}/>
      <MoreWaysToContact/>
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getContactInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default ContactUs;
