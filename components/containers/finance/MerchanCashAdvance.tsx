import { NextPage } from "next";
import Image from "next/image";

const MerchanCashAdvance: NextPage = () => {
  return (
    <div className="px-14 py-20 flex items-center">
      <div className="w-1/2 pr-5">
        <h2 className="text-5xl mb-5">MERCHANT CASH ADVANCE</h2>
        <p>
          While significant progress has been made, banking and traditional
          lending are still largely out of reach for those of us operating in
          the cannabis business, with “hard money” lenders typically the only
          option.
          <br />
          <br />
          We are here to help. First, we don’t believe cannabis businesses are
          second class. Second and most importantly, we underwrite based on your
          actual business, not with a specific “cannabis” criteria.
          <br />
          <br />
          Loans are available from $15,000. to over $1M. Most can be funded
          within 72 hours of application.{" "}
        </p>
      </div>
      <div className="w-1/2">
        <Image
          src="/images/mcash.png"
          alt="marchan cash image"
          width={693}
          height={680}
        />
      </div>
    </div>
  );
};

export default MerchanCashAdvance;
