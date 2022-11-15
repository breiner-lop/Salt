import { NextPage } from "next";
import Image from "next/image";
import { Link } from "react-scroll";

interface Props {
  to: string;
}

const LinkButtonBlueGradientSmooth: NextPage<Props> = ({ to }) => {
  return (
    <Link
      className="shadow-xl text-white px-3 rounded h-10 cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#28668C] to-[#1CAAA6] transition-all duration-200 hover:opacity-90"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={100}
    >
      Learn more
      <Image
        src="/icons/rr.svg"
        alt=""
        width={7}
        height={12}
        className="ml-2"
      />
    </Link>
  );
};

export default LinkButtonBlueGradientSmooth;
