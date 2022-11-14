import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return <div className='px-14 py-20 text-[#464646] border-t border-[#BABABA] bg-white'>
    <ul className='flex w-full justify-center text-lg'>
      <li className='mx--2 px-2'>
        <Link href="/" className='hover:text-[#1CAAA6] transition'>Home</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="about-us" className='hover:text-[#1CAAA6] transition'>About Us</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="contact-us" className='hover:text-[#1CAAA6] transition'>Contact Us</Link>
      </li>
    </ul>
    <ul className='flex w-full justify-center mt-5'>
      <li className='mx--2 px-2'>
        <Link href="salt-payments" className='hover:text-[#1CAAA6] transition'>Salt Payments</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="//salt-finance" className='hover:text-[#1CAAA6] transition'>Salt Finance</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="//salt-pos" className='hover:text-[#1CAAA6] transition'>Salt POS</Link>
      </li>
      <li className='mx--2 px-2'>
        <Link href="//salt-loyalty" className='hover:text-[#1CAAA6] transition'>Salt Loyalty</Link>
      </li>
    </ul>
    <ul className='flex w-full justify-center mt-5'>
      <li>
      <Link href="/" className='hover:text-[#1CAAA6] transition'>Privacy Policy</Link>
      </li>
    </ul>
    <p className='mt-20 font-bold text-center'>Copyright SALT 2022</p>
  </div>
}

export default Footer