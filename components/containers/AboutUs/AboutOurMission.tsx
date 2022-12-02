import { NextPage } from "next";
import { motion,Variants } from "framer-motion"
import { useRef } from "react";

const AboutOurMission: NextPage<any> = ({ missionData }) => {
  const scrollRef = useRef(null)
  const cardVariants: Variants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };
  const cardVariantsTitle: Variants = {
    offscreen: {
      x: 200
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 2
      },
    }
  };
  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}  ref={scrollRef} className="md:px-14 px-5 md:py-20 py-10 h-[780px] bg-[url(/images/mission.webp)] bg-conver bg-no-repeat text-white flex justify-end items-end">
      <div className="h-[350px]">
        <motion.h2 variants={cardVariantsTitle} className="md:text-5xl text-4xl font-bold mb-2 leading-[122%] tracking-widest drop-shadow-xl">
         {missionData.title}
        </motion.h2>
        <motion.p variants={cardVariants} className="drop-shadow-xl" dangerouslySetInnerHTML={{__html: missionData.description }}/>
      </div>
    </motion.div>
  );
};

export default AboutOurMission;
