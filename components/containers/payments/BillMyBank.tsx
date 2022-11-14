import { NextPage } from "next";
import Image from "next/image";

const BillMyBank: NextPage = () => {
  return (
    <div className="md:px-14 px-5 md:pb-96 pb-40 relative bg-white">
      <div className="pt-20 md:px-10 px-5 bg-[#232324] h-[750px] rounded-3xl shadow w-full">
        <div className="md:flex">
          <div className="text-white md:w-1/2">
            <h2 className="md:text-5xl text-3xl">BILL MY BANK</h2>
            <h3 className="my-3">
              <strong>The easiest way for your customers to pay.</strong>
            </h3>
            <p className="text-#D0D0D0]">
              No app downloads or card numbers necessary. <br /> Online shoppers
              link their existing bank account once and <br /> can securely pay
              every time from anywhere.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:w-1/2 text-[#D0D0D0] md:mt-0 mt-5 text-xs">
            <li className="flex md:mt-0 mt-5">
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
            <li className="flex md:mt-0 mt-5">
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
            <li className="flex md:mt-0 mt-5">
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
            <li className="flex md:mt-0 mt-5">
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
            <li className="flex md:mt-0 mt-5">
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
      <div className="absolute z-20 md:top-[300px] top-[590px] w-full mx-auto left-0 right-0 flex justify-center">
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
