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
          iconWidth={25}
        />
        <CardWithIconBlueTitleDesc
          icon="/icons/buyNowPayLater.png"
          title="Buy Now Pay Later"
          description="Customers instantly qualify for up to a $400 line of credit with a repayment plan of 4 weekly payments"
          iconWidth={29}
        />
        <CardWithIconBlueTitleDesc
          icon="/icons/minibank.png"
          title="Bill My Bank"
          description="E-commerce ACH for collection of funds prior to curbside pickup and delivery"
          iconWidth={31}
        />
      </div>
    </div>
  );
};

export default Empawer;
