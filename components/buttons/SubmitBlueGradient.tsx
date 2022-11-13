import { NextPage } from 'next'

interface Props {
    text:string
}

const SubmitBlueGradient: NextPage<Props> = ({ text }) => {
  return <button className="shadow-xl w-full text-white px-3 rounded h-10 flex justify-center items-center bg-gradient-to-r from-[#28668C] to-[#1CAAA6]">
  {text}
</button>
}

export default SubmitBlueGradient