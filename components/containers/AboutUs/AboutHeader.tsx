import { NextPage } from "next";

const AboutHeader: NextPage = () => {
  return (
    <div className="bg-[url(/images/aboutheader.webp)] h-[780px] bg-cover md:px-14 px-5 text-white flex items-center">
      <div className="drop-shadow-xl">
        <h1 className="md:text-7xl text-5xl font-bold mb-2 leading-[122%] tracking-widest">
          ABOUT US
        </h1>
        <p>
          Salt was founded by payment industry experts and is <br />
          trusted by the largest and highest volume retail chains due to the
          <br />
          reliability of our own card processing network and quality of <br />
          innovative technology.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
