import { NextPage } from "next";
import Image from "next/image";

const InventoryFinancing: NextPage<any> = ({ inventorydata }) => {
  return (
    <div id="financing" className="md:px-14 px-5 py-20 bg-[#262626]">
      <h2 className="md:text-5xl text-3xl mb-5 text-white">{inventorydata.title}</h2>
      <p className="text-[#D0D0D0] md:mb-0 mb-5" dangerouslySetInnerHTML={{__html: inventorydata.description }}/>
      <Image
        src={inventorydata.image}
        alt="marchan cash image"
        width={1406}
        height={583}
      />
    </div>
  );
};

export default InventoryFinancing;
