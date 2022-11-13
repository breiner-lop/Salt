import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return <div className='px-14 py-20 text-[#464646] border-t border-[#BABABA]'>
    <ul className='flex w-full justify-center text-lg'>
      <li className='mx--2 px-2'>
        <Link href="/">Home</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="/">About Us</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="/">Contact Us</Link>
      </li>
    </ul>
    <ul className='flex w-full justify-center mt-5'>
      <li className='mx--2 px-2'>
        <Link href="/">Salt Payments</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="/">Salt Finance</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="/">Salt POS</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="/">Salt Loyalty</Link>
      </li>
    </ul>
    <ul className='flex w-full justify-center mt-5'>
      <li>
      <Link href="/">Privacy Policy</Link>
      </li>
    </ul>
    <p className='mt-20 font-bold text-center'>Copyright SALT 2022</p>
  </div>
}

export default Footer