import { NextPage } from 'next'

interface Props {
    label:string,
    name:string,
    onChange:any,
    placeholder:string
}

const TextareaWithLabel: NextPage<Props> = ({ label, name, onChange, placeholder }) => {
  return <div>
    <label htmlFor={name}> {label} </label>
    <textarea name={name} onChange={onChange} placeholder={placeholder} className='border w-full bg-white border-[#CFD4D9] focus-within:outline-none p-5 rounded mt-2' rows={3}/>
  </div>
}

export default TextareaWithLabel