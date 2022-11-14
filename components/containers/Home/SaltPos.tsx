import { NextPage } from "next";
import Image from "next/image";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";

interface Props {}

const SaltPos: NextPage<Props> = ({}) => {
  return (
    <div className="flex md:px-14 px-5 py-10 relative w-full">
      <div className="bg-[#262626] md:w-[65%] rounded-2xl md:px-10 px-5 py-20 text-white md:pr-24 z-20 shadow-xl">
        <p>CANNABIS POS SYSTEM</p>
        <h2 className="md:text-5xl text-4xl mt-2">SALT POS</h2>
        <p className="text-[#9E9E9E] mt-5">
          Create a meaningful, modern customer experience with Salt's integrated
          POS solution. <br /> Salt POS eliminates compliance bottlenecks and payment
          frustrations enabling you, the <br /> merchant, to focus on operations.
          <br />
          <br />
          Salt's seed-to-sale software helps improve and optimize each stage of
          your operation <br /> across the supply chain.
        </p>
        <div className="w-48 mt-7">
          <LinkButtonBlueGradient href="salt-pos" text="Learn more">
            <Image
              src="/icons/rr.svg"
              alt=""
              width={7}
              height={12}
              className="ml-2"
            />
          </LinkButtonBlueGradient>
        </div>
      </div>
      <div className="h-80 absolute z-10 w-4/5 right-0 bg-gradient-to-tr to-[#232324] from-[#1E3534] my-auto top-0 bottom-0"></div>
    </div>
  );
};

export default SaltPos;
