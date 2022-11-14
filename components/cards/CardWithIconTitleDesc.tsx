import { NextPage } from "next";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
  iconWidth: number;
}

const CardWithIconTitleDesc: NextPage<Props> = ({
  icon,
  title,
  description,
  iconWidth,
}) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 p-1 flex items-center justify-center mb-4 mx-auto">
        <Image
          src={icon}
          width={iconWidth}
          height={20}
          alt={title}
          className="object-contain flex"
        />
      </div>
      <h3 className="mb-4 text-xl"> {title} </h3>
      <p className="mb-7 text-sm min-h-[80px]" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default CardWithIconTitleDesc;
