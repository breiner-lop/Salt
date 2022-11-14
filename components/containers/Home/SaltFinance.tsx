import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";
import LinkWithoutBg from "../../linkButtons/LinkWithoutBg";

interface Props {}

const SaltFinance: NextPage<Props> = ({}) => {
  return (
    <div className="md:px-14 px-5 py-20 bg-white text-black">
      <p className="md:text-lg text-base text-center text-[#0B0B0B]">
        CANNABIS BUSINESS FINANCING
      </p>
      <h2 className="md:text-5xl text-3xl text-center text-black">SALT FINANCE</h2>
      <p className="mx-auto text-center mt-5 text-[#545454]">
      Salt Finance offers a streamlined, stress-free repayment solution for your cannabis inventory purchases, funding your supplier with 100% of your invoice up front.
      </p>
      <div className="mt-14 grid md:grid-cols-2 grid-cols-1 md:w-[900px] mx-auto">
        {/** 1 card */}
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/money.png"
          title="Merchant Cash Advance"
          description="Quick, alternative lending for all working capital needs."
          href="/salt-finance/#merchant"
          iconWidth={43}
        />

        {/** 2 card */}
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/money.png"
          title="Inventory Financing"
          description="Fund 100% of your invoice up front."
          href="/salt-finance/#financing"
          iconWidth={43}
        />
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
