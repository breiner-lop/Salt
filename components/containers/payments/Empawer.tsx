import { NextPage } from "next";
import CardWithIconBlueTitleDesc from "../../cards/CardWithIconBlueTitleDesc";

const Empawer: NextPage<any> = ({ empawerData }) => {
  return (
    <div id="empawer" className="md:px-14 px-5 md:py-20 py-10 bg-[#232324] text-white">
      <h2 className="md:text-4xl text-3xl mt-2 text-center" dangerouslySetInnerHTML={{__html: empawerData.title }}/>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-32 gap-10 mt-20 mb-10">
        {
          empawerData.servicesDescription?.map((service:any, idx:number)=>{
            return <CardWithIconBlueTitleDesc
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconWidth={25}
          />
          })
        }
      </div>
    </div>
  );
};

export default Empawer;
