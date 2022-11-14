import { NextPage } from "next";

const ContactHeader: NextPage = () => {
  return (
    <div className="pt-32 md:px-14 px-5 bg-[url(/images/contactheader.jpg)] bg-cover bg-no-repeat h-[461px] flex items-center">
      <h1 className="md:text-7xl text-5xl font-bold mb-3 leading-[122%] tracking-wider text-white">
        CONTACT US
      </h1>
    </div>
  );
};

export default ContactHeader;
