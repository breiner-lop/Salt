import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CashlessAtm: NextPage = () => {
  return (
    <div className="md:px-14 px-5 py-20 md:flex items-center bg-white text-black">
      <div className="md:w-1/2">
        <h2 className="text-5xl text-black">CASHLESS ATM</h2>
        <p className="mt-2">Salt has the infrastructure in place to provide credit card processing once federally and nationally available based on existing relationships with TSYS and multiple sponsor banks</p>
        <ul className="list-disc text-[#545454] mt-5 ml-6">
          <li>Network operator and owner of technology license</li>
          <li>Cloud-based multi redundant platform (10+ networks)</li>
          <li>Exact address on customer descriptor</li>
          <li>Less than 0.1% Chargebacks</li>
        </ul>
        <div className="mt-10 flex md:flex-row flex-col">
          <div
            className="text-[#545454] border border-[#545454] px-4 py-3 rounded-xl font-bold md:mr-5 mr-0 md:mb-0 mb-3"
          >
            Increase AOV
          </div>
          <div
            className="text-[#545454] border border-[#545454] px-4 py-3 rounded-xl font-bold"
          >
            Streamline In Store Experiences
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-10">
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
