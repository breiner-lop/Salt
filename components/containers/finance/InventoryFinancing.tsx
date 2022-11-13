import { NextPage } from "next";
import Image from "next/image";

const InventoryFinancing: NextPage = () => {
  return (
    <div className="px-14 py-20 bg-[#262626]">
      <h2 className="text-5xl mb-5 text-white">INVENTORY FINANCING</h2>
      <p className="text-[#D0D0D0]">
        Tired of paying COD for your inventory purchases?
        <br />
        Would you like to buy more inventory but just don’t have enough cash
        available?
        <br />
        <span className="text-[#1CAAA6]">Salt</span> solves all that at 0 cost
        to you - the merchant. <br />
        <span className="text-[#1CAAA6]">Salt</span> offers a stress-free and
        streamlined repayment solution & funds your supplier/distributor <br />
        100% of your invoice up front.
      </p>
      <Image
        src="/images/ifinancing.png"
        alt="marchan cash image"
        width={1406}
        height={583}
      />
    </div>
  );
};

export default InventoryFinancing;
