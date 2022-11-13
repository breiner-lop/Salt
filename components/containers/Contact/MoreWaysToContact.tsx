import { NextPage } from 'next'

interface Props {}

const MoreWaysToContact: NextPage<Props> = ({}) => {
  return <div className='px-28 flex pb-20 pt-10'>
    {/** 1 seption */}
    <div className='w-1/2'>
        <div className="mapouter mb-10"><div className="gmap_canvas"><iframe width="572" height="399" id="gmap_canvas" src="https://maps.google.com/maps?q=21550%20Biscayne%20Blvd%20%20Suite%20400%20%20Aventura,%20FL%2033180&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} ></iframe></div></div>
        <p className='text-lg'>
        SALT <br />
21550 Biscayne Blvd  <br />
Suite 400 <br />
Aventura, FL 33180
        </p>
    </div>
     {/** 2 seption */}
    <div className='w-1/2 pl-10 ml-20'>
        <h2 className='text-4xl tracking-wider'>MORE WAYS TO <br /> CONTACT US</h2>
        <div className='flex mt-7'>
        <div className='border rounded-2xl p-5 mr-10 border-[#969696]'>
           <h3 className='text-xl'>Email</h3>
           <p className='text-[#545454]'>contact@salt.com</p>
        </div>
        <div className='border rounded-2xl p-5 border-[#969696]'>
           <h3 className='text-xl'>Call us</h3>
           <p className='text-[#545454]'>phone number</p>
        </div>
        </div>
        
    </div>
  </div>
}

export default MoreWaysToContact