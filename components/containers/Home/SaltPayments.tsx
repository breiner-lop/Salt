import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDesc from "../../cards/CardWithIconBlueTitleDesc";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import { motion } from "framer-motion";
import { useRef } from "react";


const SaltPayments: NextPage = () => {
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
      <motion.h2 variants={itemVariants} className="md:text-5xl text-3xl text-center">SALT PAYMENTS</motion.h2>
      <motion.p variants={itemVariants} className="text-[#B9B9B9] mt-5 text-center">
      Ensure the highest quality cannabis retail experience for your customers with a variety of our payment solutions
      </motion.p>
      <motion.div variants={itemVariants} className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-32 gap-10 mt-20">
        <CardWithIconBlueTitleDesc
          icon="/icons/cashatm.png"
          title="Cashless ATM"
          description="Increase average ticket size & create memorable in-store experiences with the industry’s only network owner and operator"
          iconWidth={25}
        />
  <CardWithIconBlueTitleDesc
          icon="/icons/buyNowPayLater.png"
          title="Buy Now Pay Later"
          description="Customers instantly qualify for up to a $400 line of credit with a repayment plan of 4 weekly payments"
          iconWidth={29}
        />
        <CardWithIconBlueTitleDesc
          icon="/icons/minibank.png"
          title="Bill My Bank"
          description="E-commerce ACH for collection of funds prior to curbside pickup and delivery"
          iconWidth={31}
        />
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
