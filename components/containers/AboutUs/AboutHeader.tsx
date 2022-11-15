import { NextPage } from "next";

const AboutHeader: NextPage = () => {
  return (
    <div className="bg-[url(/images/aboutheader.webp)] h-[780px] bg-cover md:px-14 px-5 text-white flex items-center">
      <div className="drop-shadow-xl">
        <h1 className="md:text-7xl text-5xl font-bold mb-2 leading-[122%] tracking-widest text-enter-animated">
          ABOUT US
        </h1>
        <p className="md:w-[450px] text-enter-animated-2-5s">
        Salt was founded and is run by payment industry experts. We are trusted by the largest and highest volume retailers in cannabis. 100% of our focus is on superior quality, reliability and innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
