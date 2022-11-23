import { NextPage } from "next";
import LinkButtonBlueGradientSmooth from "../../linkButtons/LinkButtonBlueGradientSmooth";
import { motion } from "framer-motion";
import { useRef } from "react";

const Header: NextPage = ({ headerData }:any) => {
  /** animations */
  const visible = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, delay: 0.1 },
  };
  const titleVariant = {
    hidden: { opacity: 0, x: -800 },
    visible,
  };
  const descriptionVariant = {
    hidden: { opacity: 0, x: -1200 },
    visible,
  };
  const buttonVariant = {
    hidden: { opacity: 0, x: -1500 },
    visible,
  };
  const scrollRef = useRef(null);
  return (
      <motion.div
      ref={scrollRef}
      viewport={{ once: true }}
      initial="hidden"
      style={{ backgroundImage:`url(${headerData.backgroundImage})`}}
      whileInView="visible"
      className={`flex items-center w-full h-[750px] bg-center bg-no-repeat bg-cover pt-32 text-white md:px-14 px-5`}
    >
      <div className="md:w-3/5 drop-shadow-2xl -mt-16 ">
        <motion.h1
          variants={titleVariant}
          className="md:text-7xl text-4xl font-bold  mb-3 leading-[122%] "
        >
          { headerData.title }
        </motion.h1>
        <motion.p variants={descriptionVariant} className="md:w-[600px] w-full">
         { headerData.description }
        </motion.p>
        <div className="w-40 mt-5">
          <motion.div variants={buttonVariant} className="flex w-40">
            <LinkButtonBlueGradientSmooth to="welead" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
