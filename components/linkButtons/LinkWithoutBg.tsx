import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    href:string,
    text:string
}

const LinkWithoutBg: NextPage<Props> = ({ href, text }) => {
  return <Link href={href} className="text-blue-marin flex items-center justify-center"> 
  {text}
  <Image src="/icons/rrb.svg" alt={text} width={7} height={12} className="ml-2 text-blue-marin" />
   </Link>
}

export default LinkWithoutBg