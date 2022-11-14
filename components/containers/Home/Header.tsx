import { NextPage } from "next";
import Image from "next/image";
import { Link } from "react-scroll";

const Header: NextPage = () => {
  return (
    <div className='bg-[url("/images/hero.webp")] flex items-center w-full h-[750px] bg-center bg-no-repeat bg-cover pt-32 text-white md:px-14 px-5'>
      <div className="md:w-3/5 drop-shadow-2xl -mt-16">
        <h1 className="md:text-7xl text-4xl font-bold  mb-3 leading-[122%]">
          FINTECH <br/>
          INFRASTRUCTURE <br/>
          FOR CANNABIS
        </h1>
        <p className="md:w-9/12 w-full">
        Salt was founded and is run by payment industry experts. We are trusted by the largest and highest volume retailers in cannabis. 100% of our focus is on superior quality, reliability and innovation.
        </p>
        <div className="w-40 mt-5">
          <Link
            className="shadow-xl text-white px-3 rounded h-10 cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#28668C] to-[#1CAAA6]"
            to="welead"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
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
        </div>
      </div>
    </div>
  );
};

export default Header;
