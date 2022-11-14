import { NextPage } from 'next'
import Image from 'next/image'
import LinkButtonBlueGradient from '../../linkButtons/LinkButtonBlueGradient'

interface Props {}

const SaltLoyalty: NextPage<Props> = ({}) => {
  return <div className="flex md:px-14 px-5 py-10 relative w-full">
    <div className="h-80 absolute z-10 md:w-4/5 left-0 bg-gradient-to-tr from-[#232324] to-[#1E3534] my-auto top-0 bottom-0"></div>
  <div className="bg-[#262626] md:w-[65%] rounded-2xl px-10 py-20 text-white md:pr-24 z-20 shadow-xl md:ml-[35%]">
    <p className='leading-4'>LOYALTY & GIFTCARD SOLUTIONS <br /> FOR CANNABIS DISPENSARIES</p>
    <h2 className="md:text-5xl text-4xl mt-2">SALT LOYALTY</h2>
    <p className="text-[#9E9E9E] mt-5">
    Salt Loyalty is a leading provider of omnichannel cannabis dispensary gift <br />
     card and loyalty program solutions. Whether you are a large MSO or <br />
      operate a single store, we have the flexibility to create a customized <br />
       solution to fit your needs and achieve your goals.
    </p>
    <div className="w-48 mt-7">
      <LinkButtonBlueGradient href="salt-loyalty" text="Learn more">
        <Image
          src="/icons/rr.svg"
          alt=""
          width={7}
          height={12}
          className="ml-2"
        />
      </LinkButtonBlueGradient>
    </div>
  </div>
</div>
}

export default SaltLoyalty