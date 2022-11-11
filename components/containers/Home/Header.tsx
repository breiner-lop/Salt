import { NextPage } from 'next'

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
  <div className='bg-[url("/images/hero.webp")] w-full h-[1000px] bg-no-repeat bg-contain py-20'>
    <h1 className='text-7xl text-white font-bold uppercase'>
      Fintech <br />
      Infrastructure <br />
      for Cannabis 
    </h1>

  </div>
  )
}

export default Header