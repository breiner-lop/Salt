import { NextPage } from "next";
import Image from "next/image";
import { Link } from "react-scroll";

const Header: NextPage = () => {
  return (
    <div className='bg-[url("/images/hero.webp")] w-full h-[750px] bg-no-repeat bg-cover pt-32 text-white md:px-14 px-5'>
      <div className="md:w-3/5">
        <h1 className="md:text-7xl text-4xl font-bold  mb-3 leading-[122%]">
          FINTECH <br />
          INFRASTRUCTURE <br />
          FOR CANNABIS
        </h1>
        <p className="md:w-9/12 w-full">
          Salt is the leading fintech platform for the cannabis industry. We
          provide the payments, marketing, sales, finance, data & loyalty
          infrastructure that create the nucleus for every dispensary.
          <br />
          <br />
          Our clients include the largest and the smallest operators in the
          United States.
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
