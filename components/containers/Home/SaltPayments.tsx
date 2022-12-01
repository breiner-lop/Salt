import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDesc from "../../cards/CardWithIconBlueTitleDesc";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import { motion } from "framer-motion";
import { useRef } from "react";


const SaltPayments: NextPage<any> = ({ paymentsData }) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  const scrollRef = useRef(null);
  return (
    <motion.div ref={scrollRef}
    viewport={{ once: true }}
    initial="hidden"
    whileInView="visible" className="bg-[#262626] text-white md:px-14 px-5 md:py-20 py-10">
      <motion.p variants={itemVariants} className="md:text-lg text-base text-center text-white">
       CANNABIS PAYMENT SOLUTIONS
      </motion.p>
      <motion.h2 variants={itemVariants} className="md:text-5xl text-3xl text-center">{ paymentsData.title }</motion.h2>
      <motion.p variants={itemVariants} className="text-[#B9B9B9] mt-5 text-center" dangerouslySetInnerHTML={{__html: paymentsData.description }}/>
      <motion.div variants={itemVariants} className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-32 gap-10 mt-20">
        {
          paymentsData.servicesDescription?.map((service:any, idx:number)=>{
            return <CardWithIconBlueTitleDesc
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconWidth={25}
          />
          })
        }
      </motion.div>
      <motion.div variants={itemVariants} className="w-48 mx-auto mt-10">
        <LinkButtonBlueGradient href="salt-payments" text="Learn more">
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

export default SaltPayments;
