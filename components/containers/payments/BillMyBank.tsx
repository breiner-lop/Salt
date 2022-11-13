import { NextPage } from "next";
import Image from "next/image";

const BillMyBank: NextPage = () => {
  return (
    <div className="px-14 pb-96 rounded-3xl relative">
      <div className="pt-20 px-10 bg-[#232324] h-[750px] rounded-3xl shadow w-full">
        <div className="flex">
          <div className="text-white w-1/2">
            <h2 className="text-5xl">BILL MY BANK</h2>
            <h3 className="my-3">
              <strong>The easiest way for your customers to pay.</strong>
            </h3>
            <p className="text-#D0D0D0]">
              No app downloads or card numbers necessary. <br /> Online shoppers
              link their existing bank account once and <br /> can securely pay
              every time from anywhere.
            </p>
          </div>
          <ul className="grid grid-cols-2 w-1/2 text-[#D0D0D0]">
            <li className="flex">
              <span>
                <Image
                  src="/icons/checkIcon.png"
                  alt="icon list"
                  width={31}
                  height={30}
                  className="mr-3"
                />
              </span>
              Frictionless Checkout
            </li>
            <li className="flex">
              <span>
                <Image
                  src="/icons/checkIcon.png"
                  alt="icon list"
                  width={31}
                  height={30}
                  className="mr-3"
                />
              </span>
              Superior Security
            </li>
            <li className="flex">
              <span>
                <Image
                  src="/icons/checkIcon.png"
                  alt="icon list"
                  width={31}
                  height={30}
                  className="mr-3"
                />
              </span>
              Account Verification System
            </li>
            <li className="flex">
              <span>
                <Image
                  src="/icons/checkIcon.png"
                  alt="icon list"
                  width={31}
                  height={30}
                  className="mr-3"
                />
              </span>
              24/7 Human Support
            </li>
            <li className="flex">
              <span>
                <Image
                  src="/icons/checkIcon.png"
                  alt="icon list"
                  width={31}
                  height={30}
                  className="mr-3"
                />
              </span>
              Simple Sign Up
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute z-20 top-[300px] w-full mx-auto left-0 right-0 flex justify-center">
        <Image
          src="/images/billmybank.png"
          alt="icon list"
          width={1172}
          height={745}
        />
      </div>
    </div>
  );
};

export default BillMyBank;
