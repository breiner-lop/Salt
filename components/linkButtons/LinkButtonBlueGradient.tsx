import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    href:string,
    text:string,
    children:any
}

const LinkButtonBlueGradient: NextPage<Props> = ({ href, text,children }) => {
  return <Link href={href} className="shadow-xl text-white px-3 rounded h-10 flex justify-center items-center bg-gradient-to-r from-[#28668C] to-[#1CAAA6]">
    {text}
    {children}
  </Link>
}

export default LinkButtonBlueGradient