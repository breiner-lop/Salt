import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  saltData:any
}

const Salt: NextPage<Props> = ({ saltData }) => {
  const [animated,setAnimated]=useState<any>(true)
  const numberRef = useRef(null)
  const prevScrollY = useRef(0);
  
  const numberAnimated = () =>{    
    let valuesDisplayed=document.querySelectorAll(".numAnimate")
    console.log(animated)
    valuesDisplayed.forEach((valueD)=>{
      let valueStart=Number(valueD.getAttribute("data-name"));
      console.log(valueD)
      //@ts-ignore
      let endValue=Number(valueD.getAttribute("data-val"));
      let counter=setInterval( ()=>{
        valueStart++
        valueD.textContent = valueStart!=endValue?valueStart.toString(): valueD.id.toString()
        if( valueStart == endValue ){
          clearInterval(counter)
          
        }
      },0.5)
    })
  }
  // handle scroll
  const handleScroll = () => {
    //@ts-ignore
    let numberSeption=numberRef?.current?.offsetTop-500
    const currentScrollY = window.scrollY;
    if (prevScrollY.current > numberSeption && animated) {
      setAnimated(false);
      numberAnimated()
    }
    prevScrollY.current = currentScrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  return (
    <div className="md:px-14 px-5 md:py-40 py-10 bg-[url(/images/saltplan.png)] bg-cover bg-no-repeat text-white">
      <Image
        src="/images/logosalt.svg"
        alt="logo"
        width={150}
        height={78}
        className="mx-auto mb-2"
      />
      <p className="text-center md:w-[620px] mx-auto" dangerouslySetInnerHTML={{__html: saltData.description }}/>

      <div ref={numberRef} className="grid md:grid-cols-3 grid-cols-1 md:mt-20 mt-5 text-enter-animated-opacity">
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate" data-val={2265} id={"2,265"} data-name={"2115"}>2115</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Active Retail Locations
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate" data-val={150} id={"$5.16B"} data-name={"1"}>1</p>
          <p className="text-[#D0D0D0] w-48 mx-auto leading-4 font-semibold">
            Gross Merchandise Value Processed
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate"data-val={13211} id={"13,211"} data-name={"13061"}>13061</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Active Payment Terminals
          </p>
        </div>

        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate" data-val={150} id={"31.4%"} data-name={"1"}>1</p>
          <p className="text-[#D0D0D0] w-36 mx-auto leading-4 font-semibold">
            Increase In Average Order
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate" data-val={112} id={"112,410"} data-name={"1"}>1</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Daily Transactions
          </p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-3xl w-40 mx-auto mb-2 numAnimate" data-val={139} id={"139%"} data-name={"1"}>1</p>
          <p className="text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold">
            Average Annual Growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Salt;
