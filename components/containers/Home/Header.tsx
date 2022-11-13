import { NextPage } from "next";
import Image from "next/image";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";

const Header: NextPage = () => {
  return (
    <div className='bg-[url("/images/hero.webp")] w-full h-[750px] bg-no-repeat bg-cover pt-32 text-white px-14'>
      <div className="w-3/5">
        <h1 className="text-7xl font-bold uppercase mb-3 leading-[122%]">
          Fintech <br />
          Infrastructure <br />
          for Cannabis
        </h1>
        <p className="w-9/12">
          Salt is the leading fintech platform for the cannbis industry. We
          provide the payments, marketing, sales, finance, data & loyalty
          infrastructure that create the nucleus for every dispensary.
          <br />
          <br />
          Our clients include the largest and the smallest operators in the
          United States.
        </p>
        <div className="w-40 mt-5">
          <LinkButtonBlueGradient href="/" text="Learn more">
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
    </div>
  );
};

export default Header;
