import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDesc from "../../cards/CardWithIconBlueTitleDesc";

const Empawer: NextPage = () => {
  return (
    <div className="md:px-14 px-5 py-20 bg-[#232324] text-white">
      <h2 className="md:text-4xl text-3xl mt-2 text-center">
        WE EMPOWER CANNABIS RETAILERS WITH FINTECH <br /> SOLUTIONS TO
        <strong> BOOST</strong> PROFITS AND <strong>IMPROVE</strong> <br />
        CUSTOMER EXPERIENCE.
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-32 mt-20 mb-10">
        <CardWithIconBlueTitleDesc
          icon="/icons/cashatm.png"
          title="Cashless ATM"
          description="Increase average ticket size & create memorable in-store experiences with the industry’s only network owner and operator"
          href="/"
          iconWidth={25}
        />
        <div>
          <div className="w-16 h-16  shadow bg-gradient-to-r from-[#1C8481] to-[#28668C] rounded-lg p-1 flex items-center justify-center mb-4">
            <Image
              src="/icons/buyNowPayLater.png"
              width={29}
              height={28}
              alt="Buy Now Pay Later"
              className="object-contain flex"
            />
          </div>
          <h3 className="mb-4 text-2xl"> Buy Now Pay Later </h3>
          <p className="mb-7 text-sm text-[#D9D9D9] leading-4">
          Customers instantly qualify for up to a $400 line of credit with a repayment plan of 4 weekly payments
          </p>
        </div>
        <CardWithIconBlueTitleDesc
          icon="/icons/minibank.png"
          title="Bill My Bank"
          description="E-commerce ACH for collection of funds prior to curbside pickup and delivery
"
          href="/"
          iconWidth={31}
        />
      </div>
    </div>
  );
};

export default Empawer;
