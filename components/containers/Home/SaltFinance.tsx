import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  financeData:any
}

const SaltFinance: NextPage<Props> = ({ financeData }) => {
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
      initial="hidden"
      whileInView="visible"
      className="md:px-14 px-5 py-20 bg-white text-black"
    >
      <motion.p
        variants={itemVariants}
        className="md:text-lg text-base text-center text-[#0B0B0B]"
      >
        CANNABIS BUSINESS FINANCING
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="md:text-5xl text-3xl text-center text-black"
      >
       { financeData.title }
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mx-auto text-center mt-5 text-[#545454]"
        dangerouslySetInnerHTML={{__html: financeData.description }}
      />
      <motion.div
        variants={itemVariants}
        className="mt-14 grid md:grid-cols-2 grid-cols-1 md:w-[900px] mx-auto"
      >
        {
          financeData.servicesDescription?.map(( service:any, idx:number )=>{
            return <CardWithIconBlueTitleDescLMoreBlue
                    key={idx}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={`${service.redirectUrl}`}
                    iconWidth={43}
                    smooth={false}
                  />
          })
        }
      </motion.div>
      <motion.div variants={itemVariants} className="w-48 mx-auto mt-10">
        <LinkButtonBlueGradient href="salt-finance" text="Learn more">
          <Image
            src="/icons/rr.svg"
            alt=""
            width={7}
            height={12}
            className="ml-2"
          />
        </LinkButtonBlueGradient>
      </motion.div>
    </motion.div>
  );
};

export default SaltFinance;
