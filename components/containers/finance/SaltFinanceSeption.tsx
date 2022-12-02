import { NextPage } from "next";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";


const SaltFinanceSeption: NextPage<any> = ({ financeData }) => {
  return (
    <div id="saltFinancing" className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="text-5xl mb-3 text-center">{financeData.title}</h2>
      <p className="text-[#545454] text-center" dangerouslySetInnerHTML={{__html: financeData.description }}/>
      <div className="mt-14 grid sm:grid-cols-2 grid-cols-1 lg:w-[900px] mx-auto">
        {
          financeData.servicesDescription?.map((service:any, idx:number)=>{
            return <CardWithIconBlueTitleDescLMoreBlue
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.redirectUrl}
            iconWidth={45}
            smooth={true}
          />
          })
        }
      </div>
    </div>
  );
};

export default SaltFinanceSeption;
