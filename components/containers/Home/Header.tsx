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
        Salt was founded and is run by payment industry experts. We are trusted by the largest and highest volume retailers in cannabis. 100% of our focus is on superior quality, reliability and innovation.
        </p>
        <div className="w-40 mt-5">
          <LinkButtonBlueGradientSmooth to="welead"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
