import { NextPage } from "next";
import Image from "next/image";

const MerchanCashAdvance: NextPage<any> = ({ merchantData }) => {
  return (
    <div id="merchant" className="md:px-14 px-5 py-20 md:flex items-center bg-white text-black">
      <div className="md:w-1/2 pr-5">
        <h2 className="md:text-5xl text-3xl mb-5">{merchantData.title}</h2>
        <p dangerouslySetInnerHTML={{__html: merchantData.description }} />
      </div>
      <div className="md:w-1/2 mt-10">
        <Image
          src={merchantData.image}
          alt="marchan cash image"
          width={693}
          height={680}
        />
      </div>
    </div>
  );
};

export default MerchanCashAdvance;
