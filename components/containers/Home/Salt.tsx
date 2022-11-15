import { NextPage } from "next";
import Image from "next/image";
import { motion,Variants } from "framer-motion"
import { useRef } from "react";

interface Props {}

const Salt: NextPage<Props> = ({}) => {
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
  return (
    <motion.div initial={{ opacity: 0 }}
    /*** @ts-ignore */
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.6 }}  ref={scrollRef} className="md:px-14 px-5 md:py-40 py-10 bg-[url(/images/saltplan.png)] bg-cover bg-no-repeat text-white">
      <Image
        src="/images/logosalt.svg"
        alt="logo"
        width={150}
        height={78}
        className="mx-auto mb-2"
      />
      <p className="text-center md:w-[620px] mx-auto">
        Salt is trusted by the largest and highest volume retail chains due to
        our consistency and quality of technology and support.
      </p>

      <motion.div variants={cardVariants} className="grid md:grid-cols-3 grid-cols-1 md:mt-20 mt-5 text-enter-animated-opacity">
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">2,265</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Active Retail Locations
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">$5.16B</p>
          <p className="text-[#D0D0D0] w-48 mx-auto leading-4 font-semibold">
            Gross Merchandise Value Processed
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">13,211</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Active Payment Terminals
          </p>
        </div>

        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">31.4%</p>
          <p className="text-[#D0D0D0] w-36 mx-auto leading-4 font-semibold">
            Increase In Average Order
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">112,410</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Daily Transactions
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2">139%</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Average Annual Growth
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Salt;
