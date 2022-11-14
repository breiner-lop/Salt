import { NextPage } from "next";
import Image from "next/image";
import CardWithIconBlueTitleDesc from "../../cards/CardWithIconBlueTitleDesc";
import LinkButtonBlueGradient from "../../linkButtons/LinkButtonBlueGradient";


const SaltPayments: NextPage = () => {
  return (
    <div className="bg-[#262626] text-white md:px-14 px-5 md:py-20 py-10">
      <p className="md:text-lg text-base text-center text-white">
       CANNABIS PAYMENT SOLUTIONS
      </p>
      <h2 className="md:text-5xl text-3xl text-center">SALT PAYMENTS</h2>
      <p className="text-[#B9B9B9] mt-5 text-center">
      Ensure the highest quality cannabis retail experience for your customers with a variety of our payment solutions
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-32 mt-20">
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
      <div className="w-48 mx-auto mt-10">
        <LinkButtonBlueGradient href="/salt-payments" text="Learn more">
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

export default SaltPayments;
