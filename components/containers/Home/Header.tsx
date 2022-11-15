import { NextPage } from "next";
import LinkButtonBlueGradientSmooth from "../../linkButtons/LinkButtonBlueGradientSmooth";

const Header: NextPage = () => {
  return (
    <div className='bg-[url("/images/hero.webp")] flex items-center w-full h-[750px] bg-center bg-no-repeat bg-cover pt-32 text-white md:px-14 px-5'>
      <div className="md:w-3/5 drop-shadow-2xl -mt-16 text-enter-animated">
        <h1 className="md:text-7xl text-4xl font-bold  mb-3 leading-[122%]">
          FINTECH <br/>
          INFRASTRUCTURE <br/>
          FOR CANNABIS
        </h1>
        <p className="md:w-[600px] w-full">
        Salt is the leading fintech platform for the cannabis industry. We provide the payments, marketing, sales, finance, data & loyalty infrastructure that create the nucleus for every dispensary. Our clients include the largest and the smallest operators in the United States.
        </p>
        <div className="w-40 mt-5">
          <LinkButtonBlueGradientSmooth to="welead"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
