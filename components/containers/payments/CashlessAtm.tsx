import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CashlessAtm: NextPage = () => {
  return (
    <div className="px-14 py-20 flex items-center">
      <div className="w-1/2">
        <h2 className="text-5xl">CASHLESS ATM</h2>
        <ul className="list-disc text-[#545454] mt-5 ml-6">
          <li>Network operator and owner of technology license</li>
          <li>Cloud-based multi redundant platform (10+ networks)</li>
          <li>Exact address on customer descriptor</li>
          <li>Less than 0.1% Chargebacks</li>
          <li>Infrastructure in place to provide credit card processing</li>
          <li>Once federally and nationally available based on existing</li>
          <li>Relationships with TSYS and multiple sponsor banks</li>
        </ul>
        <div className="mt-10">
          <Link
            href="/"
            className="text-[#545454] border border-[#545454] px-4 py-3 rounded-xl font-bold mr-5"
          >
            Increase AOV
          </Link>
          <Link
            href="/"
            className="text-[#545454] border border-[#545454] px-4 py-3 rounded-xl font-bold"
          >
            Streamline In Store Experiences
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/images/cashlessAtm.png"
          width={724}
          height={729}
          alt="cashlees atm"
        />
      </div>
    </div>
  );
};

export default CashlessAtm;
