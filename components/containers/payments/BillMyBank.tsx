import { NextPage } from "next";
import Image from "next/image";

const BillMyBank: NextPage<any> = ({ billBankData }) => {
  return (
    <div className="md:px-14 px-5 md:pb-96 pb-40 relative bg-white">
      <div className="pt-20 md:px-10 px-5 bg-[#232324] h-[750px] rounded-3xl shadow w-full">
        <div className="md:flex">
          <div className="text-white md:w-1/2">
            <h2 className="md:text-5xl text-3xl">{billBankData.title}</h2>
            <p className="text-#D0D0D0] md:w-[380px] mt-3" dangerouslySetInnerHTML={{__html: billBankData.description }} />
          </div>
          <ul className="grid grid-cols-2 md:w-1/2 text-[#D0D0D0] md:mt-0 mt-5 text-xs">
          {
                billBankData.listDescription?.map((service:any, idx:number)=>{
                  return <li className="flex md:mt-0 mt-5" key={idx}>
                  <span>
                    <Image
                      src="/icons/checkIcon.png"
                      alt="icon list"
                      width={31}
                      height={30}
                      className="mr-3"
                    />
                  </span>
                  {service}
                </li>
                })
              }
          </ul>
        </div>
      </div>
      <div className="absolute z-20 md:top-[300px] top-[590px] w-full mx-auto left-0 right-0 flex justify-center">
        <Image
          src={billBankData.image}
          alt="icon list"
          width={1172}
          height={745}
        />
      </div>
    </div>
  );
};

export default BillMyBank;
