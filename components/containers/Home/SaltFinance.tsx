import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import LinkWithoutBg from "../../linkButtons/LinkWithoutBg";

interface Props {}

const SaltFinance: NextPage<Props> = ({}) => {
  return (
    <div className="px-14 py-20">
      <p className="text-lg text-center text-[#0B0B0B]">
        CANNABIS BUSINESS FINANCING
      </p>
      <h2 className="text-5xl text-center">SALT FINANCE</h2>
      <p className="mx-auto text-center mt-5 text-[#545454]">
        Inventory financing made simple. Salt Fiancne offers a streamlined
        repayment solution for all cannabis <br /> inventory purchases.
        <br />
        <br />
        Tired of paying COD for your inventory purchases? <br />
        Would you like to buy more product butdon’t have enough cash available?
        <br />
        <br />
        Salt Finance solves that at 0 cost to you - the merchant. <br />
        Salt Finance offers a stress-free and streamlined repayment solution and
        funds your supplier 100% of your <br /> invoice up front.
      </p>
      <div className="mt-14 grid grid-cols-2 w-[900px] mx-auto">
        {/** 1 card */}
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/money.png"
          title="Merchant Cash Advance"
          description="Quick, alternative lending for all working capital needs."
          href="mgjg"
          iconWidth={43}
        />
        {/** 2 card */}
        <div className="p-5">
          <div className="w-16 h-16 border border-black rounded-lg p-1 flex items-center justify-center mb-4">
            <Image
              src="/icons/money.png"
              width={43}
              height={35}
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
            <LinkWithoutBg href="/" text="Learn more" />
          </div>
        </div>
      </div>
      <div className="w-48 mx-auto mt-10">
        <LinkButtonBlueGradient href="/salt-finance" text="Learn more">
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
  );
};

export default SaltFinance;
