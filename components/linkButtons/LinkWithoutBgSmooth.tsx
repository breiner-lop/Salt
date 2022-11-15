import { NextPage } from 'next'
import Image from 'next/image'
import { Link } from "react-scroll";

interface Props {
    to:string,
    text:string
}

const LinkWithoutBgSmooth: NextPage<Props> = ({ to, text }) => {
  return <Link
   className="text-blue-marin flex items-center justify-center cursor-pointer"
   to={to}
  smooth={true}
  offset={50}
  duration={100}> 
  {text}
  <Image src="/icons/rrb.svg" alt={text} width={7} height={12} className="ml-2 text-blue-marin" />
   </Link>
}

export default LinkWithoutBgSmooth