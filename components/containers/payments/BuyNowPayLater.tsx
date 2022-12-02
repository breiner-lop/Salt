import { NextPage } from "next";
import Image from "next/image";

const BuyNowPayLater: NextPage<any> = ({ buyNowData }) => {
  return (
    <div className="md:px-14 px-5 pb-20 md:flex items-center bg-white text-black">
      <div className="md:w-1/2">
        <Image
          src={buyNowData.image}
          width={715}
          height={738}
          alt="cashlees atm"
        />
      </div>
      <div className="md:w-1/2 md:pl-5 md:mt-0 mt-10">
        <h2 className="md:text-5xl text-3xl mb-5">{buyNowData.title}</h2>
        <p dangerouslySetInnerHTML={{__html: buyNowData.description }}/>
        <ul className="mt-5 ml-2">
          {
            buyNowData.listDescription?.map((service:any, idx:number)=>{
              return <li key={idx}><span className="mr-2">{idx+1}.</span>{service}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default BuyNowPayLater;
