import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    href:string,
    text:string
}

const OutlineWhite: NextPage<Props> = ({ href, text }) => {
  return <Link href={href} className="border px-3 rounded h-10 flex items-center transition duration-200 hover:bg-white/10">
    {text}
  </Link>
}

export default OutlineWhite