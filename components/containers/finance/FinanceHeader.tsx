import { NextPage } from "next";
import LinkButtonBlueGradientSmooth from "../../linkButtons/LinkButtonBlueGradientSmooth";

const FinanceHeader: NextPage = () => {
  return (
    <div className="text-white pt-32 md:px-14 px-5 bg-[url(/images/financeheader.webp)] bg-center bg-cover bg-no-repeat h-[638px] flex items-center">
      <div>
        <h1 className="md:text-7xl text-5xl font-bold uppercase mb-3 leading-[122%] tracking-wider">
          SALT FINANCE
        </h1>
        <p>Payment Solutions for the Payment Industry</p>
        <div className="w-40 mt-10">
          <LinkButtonBlueGradientSmooth to="saltFinancing"/>
        </div>
      </div>
    </div>
  );
};

export default FinanceHeader;
