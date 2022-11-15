import { NextPage } from "next";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from "../../cards/TeamMemberCard";

const OurTeam: NextPage = () => {
  //href
  // next and previus slide
  var sliderRef={}
 const next=()=> {
  //@ts-ignore
  sliderRef.slickNext();
  }
  const previous=()=> {
    //@ts-ignore
    sliderRef.slickPrev();
  }
  // here is the slider settings
  const sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //here is the team members data
  const teamMembers = [
    {
      id: "1",
      name: "Jeff Foster",
      ocupation: "Chief Executive Officer",
      description:
        "Over 20 years experience in payments, acquiring, issuing and risk management for large scale online and offline retailers as well as some of the world’s largest banks. Mr. Foster has been featured in various publications, including The Wall Street Journal, Business Week and The Financial Times in addition to being a sought after speaker within the payments industry. Mr. Foster has appeared as a keynote or featured speaker around the world and has appeared on Bloomberg Television, CNN and ABC News.",
      linkedInProfile: "https://www.linkedin.com/in/jfosterpayventures",
    },
    {
      id: "2",
      name: "Bruce Garelick",
      ocupation: "Chief Financial Officer",
      description:
        "Bruce Garelick is a venture capitalist/entrepreneur/c-level executive and disruptive technology investing enthusiast with over 25 years’ experience. Bruce has dedicated his career to investing, molding, and guiding transformative growth technology companies. His successful track record spans managing one of the largest technology hedge fund pools of capital in the world for a former Harvard University endowment investment manager (Adage Capital) to starting his own hedge fund (Garelick Capital Partners), which grew into one of the top dedicated technology hedge funds in the world.",
      linkedInProfile: "https://www.linkedin.com/in/bruce-j-garelick-b37b519b",
    },
    {
      id: "3",
      name: "Michael Park",
      ocupation: "Chief Compliance Officer",
      description:
        "As a strategic and visionary Legal and Compliance Officer, Michael provides executive leadership on business transactions, corporate governance, regulatory and compliance matters, risk management strategies, HR policies, disputes, litigation, and general legal issues. Michael’s approach is to provide understandable and actionable legal guidance that furthers organizational goals and business development while protecting the financial health & wellness of the company.",
      linkedInProfile: "https://www.linkedin.com/in/michaelgpark",
    },
    {
      id: "4",
      name: "Ryan Hoyt",
      ocupation: "VP, Sales",
      description:
        "Ryan is Salt’s sales leader directly responsible for onboarding the company’s enterprise level accounts.He has a diverse background in ad and fintech business development which has led to his expertise and success in selling the Salt suite of products.",
      linkedInProfile: "https://www.linkedin.com/in/ryan-g-hoyt-36635a7b",
    },
    {
      id: "5",
      name: "Allen Beyer",
      ocupation: "VP, Sales",
      description:
        "Allen is a CA attorney with a background in technology law and entrepreneurship. At Salt, Allen draws a decade of entrepreneurial endeavors working with emerging growth companies to lead the Business Development & Sales teams and is responsible for onboarding and servicing several hundred accounts, including many publicly traded MSOs, generating >$500M in additional payments processing volume",
      linkedInProfile: "https://www.linkedin.com/in/allenjbeyer",
    },
    {
      id: "6",
      name: "Justin Friedberg",
      ocupation: "VP, Sales",
      description:
        "Justin Friedberg has been in the high-risk payment space close to a decade. With this experience has helped grow Salt into a multi-million dollar company by maintaining his position in onboarding long-term strategic partnerships and ISO relations.",
      linkedInProfile: "https://www.linkedin.com/in/justinfriedberg",
    },
    {
      id: "7",
      name: "Phil Margolin",
      ocupation: "Director, Business Development",
      description:
        "Since receiving his MBA in Finance from the Kelley School of Business, Phil has had experience executing healthcare M&A deals, leading corporate strategy initiatives for Fortune 50 companies, and has recently transitioned to growing Salt’s presence in cannabis. Phil brings a diverse understanding and skill set to the Salt team and is responsible for the growth of Salt’s financial services products.",
      linkedInProfile:
        "https://www.linkedin.com/in/philipp-margolin-mba-74a77673",
    },
    {
      id: "8",
      name: "Justin Soulen",
      ocupation: "General Counsel",
      description:
        "Justin is an attorney and an entrepreneur with a background in business transactions, corporate governance, and compliance who draws from his experience as counsel for startups in serving as Associate General Counsel for Salt.",
      linkedInProfile: "https://www.linkedin.com/in/justin-soulen-17349a29",
    },
    {
      id: "9",
      name: "Taylor Walsh",
      ocupation: "Business Development Representative",
      description:
        "Taylor has expertise providing financial and strategic advice to high growth SaaS and POS brands, middle market and large cap companies. He also has execution experience across sell-side and buy-side M&A, capital markets and private placement transactions.",
      linkedInProfile: "https://www.linkedin.com/in/taylor-j-walsh-60b499103",
    },
    {
      id: "10",
      name: "David Isaacson",
      ocupation: "Business Development Representative",
      description:
        "Dave is a Sales Consultant with over a decade of experience within the Canna-Space, and a background in finance.  From managing operations for retail storefronts to growing and building out operations and start-up companies, he has seen and been a part of the incredible growth within the cannabis industry from Washington, DC to California.",
      linkedInProfile: "https://www.linkedin.com/in/dave-isaacson-93b2471a1",
    },
  ];
  return (
    <div className="md:px-14 px-5 md:py-20 py-10 bg-white text-black">
      <div className="flex justify-between md:mb-20 mb-10">
        <h2 className="md:text-4xl text-3xl mb-2 leading-[122%] tracking-widest text-black">
          OUR TEAM
        </h2>
        <div className="flex items-center">
          <button className="mr-3 px-2 transition duration-200 hover:scale-105" onClick={()=>previous()}>
            <Image
              src="/icons/ArrowRight.svg"
              width={34}
              height={28}
              alt="team prev"
            />
          </button>
          <button className="ml-3 px-2 transition duration-200 hover:scale-105 drop-shadow" onClick={()=>next()}>
            <Image
              src="/icons/ArrowLeft.svg"
              width={40}
              height={34}
              alt="team next"
            />
          </button>
        </div>
      </div>
      <Slider ref={(el:any) =>  sliderRef = el} {...sliderSettings}>
        {teamMembers.map((item, idx) => {
          return (
            <TeamMemberCard
              key={idx}
              name={item.name}
              ocupation={item.ocupation}
              description={item.description}
              linkedInProfile={item.linkedInProfile}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default OurTeam;
