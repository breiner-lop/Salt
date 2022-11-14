import { NextPage } from 'next'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from '../../cards/TeamMemberCard';

interface Props {}

const OurTeam: NextPage<Props> = ({}) => {
    // here is the slider settings
    const sliderSettings = {
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };
      //here is the team members data
      const teamMembers = [
        {
            id:"1",
            name:"Jeff Foster",
            ocupation:"Chief Executive Officer",
            description:"Over 20 years experience in payments, acquiring, issuing and risk management for large scale online and offline retailers as well as some of the world’s largest banks. Mr. Foster has been featured in various publications, including The Wall Street Journal, Business Week and The Financial Times in addition to being a sought after speaker within the payments industry. Mr. Foster has appeared as a keynote or featured speaker around the world and has appeared on Bloomberg Television, CNN and ABC News.",
            linkedInProfile:"https://www.linkedin.com"
        },
        {
            id:"2",
            name:"Bruce Garelick",
            ocupation:"Chief Financial Officer",
            description:"As a strategic and visionary Legal and Compliance Officer, Michael provides executive leadership on business transactions, corporate governance, regulatory and compliance matters, risk management strategies, HR policies, disputes, litigation, and general legal issues. Michael’s approach is to provide understandable and actionable legal guidance that furthers organizational goals and business development while protecting the financial health & wellness of the company.",
            linkedInProfile:"https://www.linkedin.com"
        },
        {
            id:"3",
            name:"Michael Park",
            ocupation:"Chief Compliance Officer",
            description:"As a strategic and visionary Legal and Compliance Officer, Michael provides executive leadership on business transactions, corporate governance, regulatory and compliance matters, risk management strategies, HR policies, disputes, litigation, and general legal issues. Michael’s approach is to provide understandable and actionable legal guidance that furthers organizational goals and business development while protecting the financial health & wellness of the company.",
            linkedInProfile:"https://www.linkedin.com"
        },
        {
            id:"4",
            name:"Jeff Foster",
            ocupation:"Chief Executive Officer",
            description:"Over 20 years experience in payments, acquiring, issuing and risk management for large scale online and offline retailers as well as some of the world’s largest banks. Mr. Foster has been featured in various publications, including The Wall Street Journal, Business Week and The Financial Times in addition to being a sought after speaker within the payments industry. Mr. Foster has appeared as a keynote or featured speaker around the world and has appeared on Bloomberg Television, CNN and ABC News.",
            linkedInProfile:"https://www.linkedin.com"
        },
        {
            id:"5",
            name:"Bruce Garelick",
            ocupation:"Chief Financial Officer",
            description:"As a strategic and visionary Legal and Compliance Officer, Michael provides executive leadership on business transactions, corporate governance, regulatory and compliance matters, risk management strategies, HR policies, disputes, litigation, and general legal issues. Michael’s approach is to provide understandable and actionable legal guidance that furthers organizational goals and business development while protecting the financial health & wellness of the company.",
            linkedInProfile:"https://www.linkedin.com"
        },
        {
            id:"6",
            name:"Michael Park",
            ocupation:"Chief Compliance Officer",
            description:"As a strategic and visionary Legal and Compliance Officer, Michael provides executive leadership on business transactions, corporate governance, regulatory and compliance matters, risk management strategies, HR policies, disputes, litigation, and general legal issues. Michael’s approach is to provide understandable and actionable legal guidance that furthers organizational goals and business development while protecting the financial health & wellness of the company.",
            linkedInProfile:"https://www.linkedin.com"
        }
      ]
  return <div className='md:px-14 px-5 md:py-20 py-10 bg-white text-black'>
    <div className='flex justify-between md:mb-20 mb-10'>
    <h2 className="md:text-4xl text-3xl mb-2 leading-[122%] tracking-widest text-black">
          OUR TEAM
    </h2>
    <div className='flex items-center'>
        <button className='mr-3 px-2'> <Image src="/icons/ArrowRight.svg" width={34} height={28} alt="team next" /> </button>
        <button className='ml-3 px-2'> <Image src="/icons/ArrowLeft.svg" width={40} height={34} alt="team next" /> </button>
    </div>
    </div>
    <Slider {...sliderSettings}>
        {
            teamMembers.map(( item, idx )=>{
                return <TeamMemberCard key={idx} name={item.name} ocupation={item.ocupation} description={item.description} linkedInProfile={item.linkedInProfile} />
            })
        }
        </Slider>
  </div>
}

export default OurTeam