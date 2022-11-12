import { NextPage } from "next";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
  href: string;
  iconWidth: number;
}

const CardWithIconBlueTitleDesc: NextPage<Props> = ({
  icon,
  title,
  description,
  href,
  iconWidth,
}) => {
  return (
    <div className="">
      <div className="w-16 h-16  shadow bg-gradient-to-r from-[#1C8481] to-[#28668C] rounded-lg p-1 flex items-center justify-center mb-4">
        <Image
          src={icon}
          width={iconWidth}
          height={20}
          alt={title}
          className="object-contain flex"
        />
      </div>
      <h3 className="mb-4 text-2xl"> {title} </h3>
      <p className="mb-7 text-sm text-[#D9D9D9] leading-4"> {description} </p>
    </div>
  );
};

export default CardWithIconBlueTitleDesc;
