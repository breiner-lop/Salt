import { NextPage } from "next";
import Image from "next/image";

const InventoryFinancing: NextPage = () => {
  return (
    <div id="financing" className="md:px-14 px-5 py-20 bg-[#262626]">
      <h2 className="md:text-5xl text-3xl mb-5 text-white">INVENTORY FINANCING</h2>
      <p className="text-[#D0D0D0] md:mb-0 mb-5">
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
