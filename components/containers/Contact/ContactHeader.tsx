import { NextPage } from "next";

const ContactHeader: NextPage = () => {
  return (
    <div className="pt-32 px-14 bg-[url(/images/contactheader.jpg)] bg-cover bg-no-repeat h-[461px] flex items-center">
      <h1 className="text-7xl font-bold uppercase mb-3 leading-[122%] tracking-wider text-white">
        Contact us
      </h1>
    </div>
  );
};

export default ContactHeader;
