import { NextPage } from "next";
import Image from "next/image";
import LinkWithoutBg from "../linkButtons/LinkWithoutBg";

interface Props {
  icon: string;
  title: string;
  description: string;
  href: string;
  iconWidth: number;
}

const CardWithIconTitleDescLmore: NextPage<Props> = ({
  icon,
  title,
  description,
  href,
  iconWidth,
}) => {
  return (
    <div className="border border-slate-300 rounded-lg p-5">
      <div className="w-16 h-16 border border-black rounded-lg p-1 flex items-center justify-center mb-4">
        <Image
          src={icon}
          width={iconWidth}
          height={20}
          alt={title}
          className="object-contain flex"
        />
      </div>
      <h3 className="mb-4 text-xl"> {title} </h3>
      <p className="mb-7 text-sm min-h-[80px] text-[#545454]"> {description} </p>
      <div className="w-40 flex">
      <LinkWithoutBg href={href} text="Learn more" />
      </div>
    </div>
  );
};

export default CardWithIconTitleDescLmore;
