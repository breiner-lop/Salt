import { NextPage } from "next";

interface Props {
  label: string;
  name: string;
  onChange: any;
  type: string;
  placeholder: string;
  required:boolean
}

const InputWithLabel: NextPage<Props> = ({
  label,
  name,
  onChange,
  type,
  placeholder,
  required
}) => {
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-[#CFD4D9] rounded h-10 px-3 w-full focus-within:outline-none mt-2"
      />
    </div>
  );
};

export default InputWithLabel;
