import { NextPage } from "next";

interface Props {
  name: string;
  onChange: any;
  label: string;
}

const CheckboxWithLabel: NextPage<Props> = ({ name, label, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={onChange}
        className="cursor-pointer bg-white"
      />
      <label htmlFor={name} className="cursor-pointer ml-2">
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
