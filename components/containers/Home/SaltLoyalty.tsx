import { NextPage } from 'next'
import Image from 'next/image'
import { useRef } from 'react';
import LinkButtonBlueGradient from '../../linkButtons/LinkButtonBlueGradient'
import { motion } from "framer-motion";

interface Props {
  loyaltyData:any
}

const SaltLoyalty: NextPage<Props> = ({loyaltyData}) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  const scrollRef = useRef(null);
  return <motion.div ref={scrollRef}
  viewport={{ once: true }}  initial="hidden"
  whileInView="visible" className="flex md:px-14 px-5 py-10 relative w-full">
    <div className="h-80 absolute z-10 md:w-4/5 left-0 bg-gradient-to-tr from-[#232324] to-[#1E3534] my-auto top-0 bottom-0"></div>
  <div className="bg-[#262626] md:w-[65%] rounded-2xl md:px-10 px-5 py-20 text-white md:pr-24 z-20 shadow-xl md:ml-[35%]">
    <motion.p variants={itemVariants} className='leading-4'>LOYALTY & GIFTCARD SOLUTIONS <br /> FOR CANNABIS DISPENSARIES</motion.p>
    <motion.h2 variants={itemVariants} className="md:text-5xl text-4xl mt-2">SALT LOYALTY</motion.h2>
    <motion.p variants={itemVariants} className="text-[#9E9E9E] mt-5 lg:w-[550px]">
    Salt Loyalty is a leading provider of omnichannel cannabis dispensary gift
     card and loyalty program solutions. Whether you are a large MSO or
      operate a single store, we have the flexibility to create a customized
       solution to fit your needs and achieve your goals.
    </motion.p>
    <motion.div variants={itemVariants} className="w-48 mt-7">
      <LinkButtonBlueGradient href="salt-loyalty" text="Learn more">
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
</motion.div>
}

export default SaltLoyalty