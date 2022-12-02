import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CashlessAtm: NextPage<any> = ({ cashlessData }) => {
  return (
    <div className="md:px-14 px-5 py-20 flex md:flex-row items-center bg-white text-black flex-col-reverse">
      <div className="md:w-1/2">
        <h2 className="md:text-5xl text-4xl text-black">{cashlessData.title}</h2>
        <p className="mt-2" dangerouslySetInnerHTML={{__html: cashlessData.description }}/>
        <ul className="list-disc text-[#545454] mt-5 ml-6">
          {
            cashlessData.listDescription?.map((service:any, idx:number)=>{
              return  <li key={idx}>{service}</li>
            })
          }
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
      <div className="md:w-1/2 mb-10 md:mb-0">
        <Image
          src={cashlessData.image}
          width={724}
          height={729}
          alt="cashlees atm"
        />
      </div>
    </div>
  );
};

export default CashlessAtm;
