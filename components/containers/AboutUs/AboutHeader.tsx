import { motion } from "framer-motion";
import { useRef } from "react";

const AboutHeader = ({ data }: any) => {
  const scrollRef = useRef(null);
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
  return (
    <motion.div
      ref={scrollRef}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
      className="h-[780px] bg-cover md:px-14 px-5 text-white flex items-center"
    >
      <div className="drop-shadow-xl">
        <motion.h1
          variants={titleVariant}
          className="md:text-7xl text-5xl font-bold mb-2 leading-[122%] tracking-widest"
        >
          {data.title}
        </motion.h1>
        <motion.p variants={descriptionVariant} className="md:w-[450px]">
          {data.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
