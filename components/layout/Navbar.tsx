import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import BtnOutlineWhite from "../linkButtons/BtnOutlineWhite";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const services = [
    { href: "/", text: "Service1" },
    { href: "/", text: "Service2" },
    { href: "/", text: "Service3" },
    { href: "/", text: "Service4" },
  ];

  return (
    <div className="absolute flex justify-between w-full py-8 px-14 text-white max-w-[1449px]">
      <Link href="/">
        <Image
          src="/images/logosalt.svg"
          width={100}
          height={100}
          alt="salt logo"
        />
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/about-us" className="mx-2 px-2 hover:text-[#1CAAA6] transition">
            About us
          </Link>
        </li>
        <li>
          <div className="group relative">
            <button className="mx-2 px-2 flex items-center hover:text-[#1CAAA6] transition">
              Services
              <Image
                src="/icons/rdown.svg"
                width={13}
                height={20}
                alt="services dropdown"
                className="ml-2"
              />
            </button>
            <div className="hidden  absolute -ml-11 group-hover:flex text-center">
              <div className="flex-col flex bg-gradient-to-tr to-[#36383C] from-[#232428] rounded shadow px-4 py-3 pr-2 w-48 mt-5 ">
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="/salt-payments">
                SALT PAYMENTS
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="/salt-finance">
                SALT FINANCE
              </Link>
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="/salt-pos">
                SALT POS
              </Link>
              
              <Link className="my-1 py-1 hover:text-[#1CAAA6] transition" href="/salt-loyalty">
                SALT LOYALTY
              </Link>
              </div>
            </div>
          </div>
        </li>
        <BtnOutlineWhite href="/contact-us" text="Contact Us" />
      </ul>
    </div>
  );
};

export default Navbar;
