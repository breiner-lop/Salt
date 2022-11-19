import { NextPage } from "next";
import { motion } from "framer-motion";
import { useRef } from "react";

const AboutHeader: NextPage = () => {
  const scrollRef = useRef(null);
  const visible = { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.1 } };
  const titleVariant = {
    hidden: { opacity: 0, x: -800 },
    visible,
  };
  const descriptionVariant = {
    hidden: { opacity: 0, x: -1200 },
    visible,
  };
  return (
    <motion.div ref={scrollRef} viewport={{ once: false }}
    initial="hidden"
    whileInView="visible" className="bg-[url(/images/aboutheader.webp)] h-[780px] bg-cover md:px-14 px-5 text-white flex items-center">
      <div className="drop-shadow-xl">
        <motion.h1 variants={titleVariant} className="md:text-7xl text-5xl font-bold mb-2 leading-[122%] tracking-widest">
          ABOUT US
        </motion.h1>
        <motion.p variants={descriptionVariant} className="md:w-[450px]">
        Salt was founded and is run by payment industry experts. We are trusted by the largest and highest volume retailers in cannabis. 100% of our focus is on superior quality, reliability and innovation.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
