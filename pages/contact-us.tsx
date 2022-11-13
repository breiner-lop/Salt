import { NextPage } from "next";
import ContactHeader from "../components/containers/Contact/ContactHeader";
import GetInTouchForm from "../components/containers/Contact/GetInTouchForm";
import MoreWaysToContact from "../components/containers/Contact/MoreWaysToContact";

const ContactUs: NextPage = () => {
  return (
    <div>
      <ContactHeader />
      <GetInTouchForm />
      <MoreWaysToContact/>
    </div>
  );
};

export default ContactUs;
