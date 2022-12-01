import { NextPage } from 'next'
import CardWithIconTitleDescLmore from '../../cards/CardWithIconTitleDescLmore'
import { motion,Variants } from "framer-motion"
import { useRef } from 'react'

interface Props {
  weLeadData:any
}

const WeLead: NextPage<Props> = ({weLeadData}) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };
  const scrollRef = useRef(null)
  return <motion.div initial={{ opacity: 0 }}
  /*** @ts-ignore */
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}  ref={scrollRef}  id='welead' className='md:px-14 px-5 py-16 bg-white text-black'>
    <h2 className='md:text-5xl text-3xl text-center leading-[122%]'>{ weLeadData.title }</h2>
    <p className='text-center text-gray mt-3 md:w-8/12 mx-auto' dangerouslySetInnerHTML={{__html: weLeadData.description }}/>
   
    <motion.div >
    <motion.div variants={cardVariants}
     className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
      {
        weLeadData.servicesDescription?.map((service:any, idx:number)=>{
          return <CardWithIconTitleDescLmore key={idx} icon={service.icon} title={ service.title } description={ service.description } href={`${ service.redirectUrl }`} iconWidth={29} />
        })
      }
    </motion.div>
    </motion.div>
  </motion.div>
}

export default WeLead