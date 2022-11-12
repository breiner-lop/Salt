import { NextPage } from "next";

const AboutOurMission: NextPage = () => {
  return (
    <div className="px-14 py-20 h-[780px] bg-[url(/images/mission.webp)] bg-conver bg-no-repeat text-white flex justify-end items-end">
      <div className="h-[350px]">
        <h2 className="text-5xl font-bold mb-2 leading-[122%] tracking-widest drop-shadow-xl">
          OUR MISSION
        </h2>
        <p className="drop-shadow-xl">
          Our mission is to empower cannabis retailers to increase profits,
          operate more <br /> efficiently, and create a better customer
          experience. Salt offers a range of <br /> payment solutions your
          dispensary needs all in one place to help streamline and <br />{" "}
          simplify your operations.
        </p>
      </div>
    </div>
  );
};

export default AboutOurMission;
