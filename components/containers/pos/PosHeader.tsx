import { NextPage } from 'next'
import Image from 'next/image'
import LinkButtonBlueGradient from '../../linkButtons/LinkButtonBlueGradient'
import LinkButtonBlueGradientSmooth from '../../linkButtons/LinkButtonBlueGradientSmooth'


const PosHeader: NextPage = () => {
  return <div className="text-white pt-32 md:px-14 px-5 bg-[url(/images/posheader.jpg)] bg-center bg-cover bg-no-repeat h-[638px] flex items-center">
  <div>
    <h1 className="md:text-7xl text-5xl font-bold uppercase mb-3 leading-[122%] tracking-wider">
    SALT POS
    </h1>
    <p>POS Solutions for Cannabis Dispensaries</p>
    <div className="w-40 mt-10">
     <LinkButtonBlueGradientSmooth to="solutions"/>
    </div>
  </div>
</div>
}

export default PosHeader