import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    name:string,
    ocupation:string,
    description:string,
    linkedInProfile:string
}

const TeamMemberCard: NextPage<Props> = ({ name, ocupation, description, linkedInProfile }) => {
  return <div className='p-5'>
    <h3 className='text-2xl font-bold'>{name}</h3>
    <h4 className='text-2xl'>{ocupation}</h4>
    <p className='text-[#545454] text-sm mt-5 mb-10'>{description}</p>
    <Link href={linkedInProfile??"/"} className='border rounded px-6 py-3 transition duration-200 hover:bg-black hover:text-white drop-shadow-xl '>LinkedIn profile</Link>
  </div>
}

export default TeamMemberCard