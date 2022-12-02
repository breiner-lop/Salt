import { NextPage } from "next";
import CardWithIconTitleDesc from "../../cards/CardWithIconTitleDesc";

const LoyaltyIsLeading: NextPage<any> = ({ loyaltyLeadingData }) => {

  return (
    <div id="leading" className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="md:text-4xl text-3xl mb-5 text-center" dangerouslySetInnerHTML={{__html: loyaltyLeadingData.title }}/>
      <p className="text-[#545454] text-center md:w-[580px] mx-auto" dangerouslySetInnerHTML={{__html: loyaltyLeadingData.description }}/>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 lg:px-40 mt-16">
        {loyaltyLeadingData.servicesDescription?.map((item:any, idx:number) => {
          return (
            <CardWithIconTitleDesc
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconWidth={50}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoyaltyIsLeading;
