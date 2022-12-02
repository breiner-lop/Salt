import { NextPage } from "next";

const OurClientReceive: NextPage<any> = ({ ourClientsData }) => {
  return (
    <div className="md:px-14 px-5 md:py-20 py-10 flex items-center justify-center text-white bg-[url(/images/ourclients.jpg)] bg-cover bg-not-repeat h-[229px]">
      <p className="md:text-3xl text-xl text-center" dangerouslySetInnerHTML={{__html: ourClientsData.title }} />
       
    </div>
  );
};

export default OurClientReceive;
