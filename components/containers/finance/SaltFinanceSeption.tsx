import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";
import LinkWithoutBg from "../../linkButtons/LinkWithoutBg";
import { Link } from "react-scroll";


const SaltFinanceSeption: NextPage = () => {
  return (
    <div className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="text-5xl mb-3 text-center">SALT FINANCE</h2>
      <p className="text-[#545454] text-center">
      Salt Finance is a funding solution for cannabis businesses suffering from cash flow issues or simply in need of additional funds for expansion, inventory, marketing programs and more
      </p>
      <div className="mt-14 grid sm:grid-cols-2 grid-cols-1 lg:w-[900px] mx-auto">
        {/** 1 card */}
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/mcash.png"
          title="Merchant Cash Advance"
          description="Quick, alternative lending for all working capital needs."
          href="#merchant"
          iconWidth={45}
        />
        {/** 2 card */}
        <div className="p-5">
          <div className="w-16 h-16 border border-black rounded-lg p-1 flex items-center justify-center mb-4">
            <Image
              src="/icons/ifinancing.png"
              width={41}
              height={41}
              alt="moneyimg"
              className="object-contain flex"
            />
          </div>
          <h3 className="mb-4 text-xl"> Inventory Financing </h3>
          <p className="mb-7 text-sm text-[#545454] leading-4">
            Fund 100% of your invoice up front.
            <br />
            <br />
            Improve cash flow management with Salt’s stress-free and streamlined
            repayment solution
          </p>
          <div className="w-40 flex">
            <LinkWithoutBg href="#financing" text="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltFinanceSeption;
