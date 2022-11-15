import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BtnOutlineWhite from "../linkButtons/BtnOutlineWhite";
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group';


const Navbar: NextPage = () => {
  const [menu, setMenu]=useState(true)
  const nodeRef = useRef(null);
  const router = useRouter()

  useEffect(()=>{
    setMenu(true)
  },[router.pathname])
  

  return (
    <div className="absolute flex justify-between w-full py-8 md:px-14 px-5 text-white max-w-[1449px]">
      <Link href="/">
        <Image
          src="/images/logosalt.svg"
          width={100}
          height={100}
          alt="salt logo"
        />
      </Link>
      <button className="md:hidden flex" onClick={()=>setMenu(!menu)}>
        <svg className="w-10 fill-white" height="100%" version="1.1" viewBox="0 0 24 24" width="100%"  xmlns="http://www.w3.org/2000/svg"><g id="Icon"><path d="M4,6.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M4,12.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M4,18.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
        </button>
      {/****mobile menu */ 
         <CSSTransition classNames="fade" in={!menu}
        nodeRef={nodeRef}
        timeout={500}
        unmountOnExit
        ><ul ref={nodeRef} className="flex md:flex-row flex-col items-center md:relative absolute md:right-14 right-0 md:top-auto top-24 z-50 bg-gradient-to-tr to-[#36383C] from-[#232428] rounded shadow p-5 w-[95%] mx-auto left-0">
        <li className="md:py-0 py-3">
          <Link href="/about-us" className="mx-2 px-2  hover:text-[#1CAAA6] transition">
            About Us
          </Link>
        </li>
        <li className="md:py-0 py-3">
          <div className="group relative">
            <button className="mx-2 px-2 flex items-center text-white hover:text-[#1CAAA6] transition">
              Services
              <svg className="ml-2 group-hover:rotate-180 transition duration-300" width="13" height="8" fill="current" xmlns="http://www.w3.org/2000/svg"><path d="m10.8.54-4.5 4.5L1.8.54l-1.8.9 6.3 6.3 6.3-6.3-1.8-.9Z" fill="currentColor"/></svg>
            </button>
            <div className="hidden  absolute md:-ml-11 -ml-20 group-hover:flex text-center">
              <div className="flex-col flex bg-gradient-to-tr to-[#36383C] from-[#232428] rounded shadow px-4 py-3 pr-2 w-48 mt-5 ">
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-payments">
                SALT PAYMENTS
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-finance">
                SALT FINANCE
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-pos">
                SALT POS
              </Link>
              
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-loyalty">
                SALT LOYALTY
              </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="md:py-0 py-3">
        <BtnOutlineWhite href="/contact-us" text="Contact Us"/>
        </li>
      </ul></CSSTransition>}
      {/*** menu desktop */}
      <ul className="md:flex hidden items-center">
        <li className="md:py-0 py-3">
          <Link href="/about-us" className="mx-2 px-2  hover:text-[#1CAAA6] transition">
            About Us
          </Link>
        </li>
        <li className="md:py-0 py-3">
          <div className="group relative transition-all">
            <button className="mx-2 px-2 flex items-center text-white hover:text-[#1CAAA6] transition">
              Services
              <svg className="ml-2 group-hover:rotate-180 transition duration-300" width="13" height="8" fill="current" xmlns="http://www.w3.org/2000/svg"><path d="m10.8.54-4.5 4.5L1.8.54l-1.8.9 6.3 6.3 6.3-6.3-1.8-.9Z" fill="currentColor"/></svg>
            </button>
            <div className="hidden absolute md:-ml-11 -ml-20 group-hover:flex text-center transition-display duration-1000">
              <div className="flex-col flex bg-gradient-to-tr to-[#36383C] from-[#232428] rounded shadow px-4 py-3  pr-2 w-48 mt-5 ">
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-payments">
                SALT PAYMENTS
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-finance">
                SALT FINANCE
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-pos">
                SALT POS
              </Link>
              
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="salt-loyalty">
                SALT LOYALTY
              </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="md:py-0 py-3">
        <BtnOutlineWhite href="/contact-us" text="Contact Us"/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
