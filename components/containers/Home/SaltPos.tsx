import { NextPage } from "next";
import Image from "next/image";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  posData:any
}

const SaltPos: NextPage<Props> = ({posData}) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  const scrollRef = useRef(null);
  return (
    <motion.div
      ref={scrollRef}
      viewport={{ once: true }}
      className="flex md:px-14 px-5 py-10 relative w-full"
      initial="hidden"
      whileInView="visible"
    >
      <div className="bg-[#262626] md:w-[65%] rounded-2xl md:px-10 px-5 py-20 text-white md:pr-24 z-20 shadow-xl">
        <motion.p variants={itemVariants}>CANNABIS POS SYSTEM</motion.p>
        <motion.h2
          variants={itemVariants}
          className="md:text-5xl text-4xl mt-2"
        >
          SALT POS
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[#9E9E9E] mt-5 lg:w-[550px]"
        >
          Create a meaningful, modern customer experience with Salt's integrated
          POS solution. Salt POS eliminates compliance bottlenecks and payment
          frustrations enabling you, the merchant, to focus on operations.
          <br />
          <br />
          Salt's seed-to-sale software helps improve and optimize each stage of
          your operation across the supply chain.
        </motion.p>
        <motion.div variants={itemVariants} className="w-48 mt-7">
          <LinkButtonBlueGradient href="salt-pos" text="Learn more">
            <Image
              src="/icons/rr.svg"
              alt=""
              width={7}
              height={12}
              className="ml-2"
            />
          </LinkButtonBlueGradient>
        </motion.div>
      </div>
      <div className="h-80 absolute z-10 w-4/5 right-0 bg-gradient-to-tr to-[#232324] from-[#1E3534] my-auto top-0 bottom-0"></div>
    </motion.div>
  );
};

export default SaltPos;
