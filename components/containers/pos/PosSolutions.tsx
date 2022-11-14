import { NextPage } from "next";
import Image from "next/image";

const PosSolutions: NextPage = () => {
  const data = [
    "“Track and trace” seed to sale software",
    "Enterprise Resource Planning",
    "Cultivation Management",
    "Production/Extraction Management",
    "Dispensary Management",
    "Customer Management",
    "Delivery",
    "Data and Loyalty",
  ];
  return (
    <div className="md:px-14 px-5 py-10 bg-white text-black">
      <div className="bg-gradient-to-tr to-[#36383C] from-[#232428] rounded-3xl md:p-20  px-5 py-10 text-center">
        <h2 className="md:text-4xl text-3xl mb-5 text-white">SALT POS SOLUTIONS</h2>
        <p className="text-[#D0D0D0]">
          Salt POS provides cannabis dispensary owners in every state with the
          solutions necessary to run <br /> their stores, their businesses and
          remain compliant with all laws and regulations in the states <br />
          where they operate.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mt-20 md:px-20  mb-10">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="text-center">
              <Image
                src="/icons/checkIcon.png"
                width={31}
                height={30}
                alt="check icon"
                className="mx-auto"
              />
              <h3 className="md:text-3xl text-2xl mt-2">{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PosSolutions;
