import { NextPage } from 'next'
import Image from 'next/image'
import LinkButtonBlueGradient from '../../linkButtons/LinkButtonBlueGradient'


const PosHeader: NextPage = () => {
  return <div className="text-white pt-32 px-14 bg-[url(/images/posheader.jpg)] bg-cover bg-no-repeat h-[638px] flex items-center">
  <div>
    <h1 className="text-7xl font-bold uppercase mb-3 leading-[122%] tracking-wider">
    SALT POS
    </h1>
    <p>POS Solutions for Cannabis Dispensaries</p>
    <div className="w-40 mt-10">
      <LinkButtonBlueGradient href="/" text="Learn more">
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

export default PosHeader