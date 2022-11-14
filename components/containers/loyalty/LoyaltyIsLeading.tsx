import { NextPage } from "next";
import CardWithIconTitleDesc from "../../cards/CardWithIconTitleDesc";

const LoyaltyIsLeading: NextPage = () => {
  const data = [
    {
      icon: "/icons/realtimeprocesses.png",
      title: "REAL TIME PROCESSES",
      description:
        "Our competitive edge is realized by the fact that we <br/> operate a vertically integrated technology  platform <br/> that securely processes all gift card and loyalty <br/> transactions in real-time at the point-of-sale.",
      iconWidth: 50,
    },
    {
      icon: "/icons/convenient.png",
      title: "CONVENIENT",
      description:
        "Sell gift cards that allow your cannabis dispensary <br/> customers to text and email them to family and <br/> friend, in-store or from our web portal.",
      iconWidth: 67,
    },
    {
      icon: "/icons/seamless.png",
      title: "SEAMLESS",
      description:
        "Our solution provides a seamless shopping <br/> experience at the point of sale.",
      iconWidth: 57,
    },
    {
      icon: "/icons/predesing.png",
      title: "PRE-DESIGNED & CUSTOM",
      description:
        "Our team specializes in the design, production, <br/> implementation, and distribution of pre-designed and custom cards. <br/><br/> We provide a full range of ancillary marketing products and <br/> services, plastic card fulfillment, eGift card options, and re-order assistance.",
      iconWidth: 50,
    },
  ];

  return (
    <div className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="md:text-4xl text-3xl mb-5 text-center">
        SALT LOYALTY IS THE LEADING PROVIDER OF <br />
        OMNICHANNEL CANNABIS DISPENSARY GIFT CARD <br />
        AND LOYALTY PROGRAM SOLUTIONS.
      </h2>
      <p className="text-[#545454] text-center">
        Whether you are a large MSO or operate a single store, we have <br />
        the flexibility to create a customized solution to fit your needs and
        achieve your goals.
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 lg:px-40 mt-16">
        {data.map((item, idx) => {
          return (
            <CardWithIconTitleDesc
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconWidth={item.iconWidth}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoyaltyIsLeading;
