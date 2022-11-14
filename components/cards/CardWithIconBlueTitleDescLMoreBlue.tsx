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

const CardWithIconBlueTitleDescLMoreBlue: NextPage<Props> = ({
  icon,
  title,
  description,
  href,
  iconWidth,
}) => {
  return (
    <div className="p-5 text-center">
      <div className="w-16 h-16 border border-black rounded-lg p-1 flex items-center justify-center mb-4 mx-auto">
        <Image
          src={icon}
          width={iconWidth}
          height={20}
          alt={title}
          className="object-contain flex"
        />
      </div>
      <h3 className="mb-4 text-xl"> {title} </h3>
      <p className="mb-7 text-sm text-[#545454] min-h-[20px]" dangerouslySetInnerHTML={{ __html: description }}></p>
      <div className="w-40 flex justify-center mx-auto">
        <LinkWithoutBg href={href} text="Learn more" />
      </div>
    </div>
  );
};

export default CardWithIconBlueTitleDescLMoreBlue;
