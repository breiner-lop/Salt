import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BtnOutlineWhite from "../linkButtons/BtnOutlineWhite"

interface Props {}

const Navbar: NextPage<Props> = ({}) => {

  const services=[
    { href:"/", text:"Service1" },
    { href:"/", text:"Service2" },
    { href:"/", text:"Service3" },
    { href:"/", text:"Service4" },
  ]

  return <div className='absolute flex justify-between w-full py-8 px-14 text-white max-w-[1449px]'>
    <Link href="/">
      <Image src="/images/logosalt.svg" width={100} height={100} alt="salt logo" />
    </Link>
    <ul className='flex items-center'>
      <li className='mx-2 px-2'>About us</li>
      <li className='mx-2 px-2'>Services</li>
      <BtnOutlineWhite href='/contact' text='Contact Us' />
    </ul>
  </div>
}

export default Navbar