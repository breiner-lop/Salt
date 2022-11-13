import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

const Salt: NextPage<Props> = ({}) => {
  return <div className='px-14 py-40 bg-[url(/images/saltplan.png)] bg-cover bg-no-repeat text-white'>
    <Image src="/images/logosalt.svg" alt="logo" width={150} height={78} className="mx-auto mb-2"/>
    <p className='text-center w-[620px] mx-auto'>Salt is trusted by the largest and highest volume retail chains due to our consistency 
and quality of technology and support. </p>

<div className='grid grid-cols-3 mt-20'>
    <div className='text-center'>
        <p className='font-bold text-3xl w-40 mx-auto mb-2'>2,265</p>
        <p className='text-[#D0D0D0] w-40 mx-auto leading-4'>Active Retail Locations</p>
        <hr className='w-16 mx-auto mt-3'/>
    </div>
    <div className='text-center'>
        <p className='font-bold text-3xl w-40 mx-auto mb-2'>$5.16B</p>
        <p className='text-[#D0D0D0] w-48 mx-auto leading-4'>Gross Merchandise Value Processed</p>
        <hr className='w-16 mx-auto mt-3'/>
    </div>
    <div className='text-center'>
        <p className='font-bold text-3xl w-40 mx-auto mb-2'>13,211</p>
        <p className='text-[#D0D0D0] w-40 mx-auto leading-4'>Actuve Payment Terminalss</p>
        <hr className='w-16 mx-auto mt-3'/>
    </div>

    <div className='text-center mt-14'>
        <p className='font-bold text-4xl w-40 mx-auto mb-2'>31.4%</p>
        <p className='text-[#D0D0D0] w-36 mx-auto leading-4 font-semibold'>Increase In Average Order</p>
    </div>
    <div className='text-center mt-14'>
        <p className='font-bold text-4xl w-40 mx-auto mb-2'>112,410</p>
        <p className='text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold'>Daily Transactions</p>
    </div>
    <div className='text-center mt-14'>
        <p className='font-bold text-4xl w-40 mx-auto mb-2'>139%</p>
        <p className='text-[#D0D0D0] w-40 mx-auto leading-4 font-semibold'>Average Annual Growth</p>
    </div>
</div>
  </div>
}

export default Salt