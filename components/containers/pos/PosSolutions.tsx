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
    <div className="px-14 py-10">
      <div className="bg-gradient-to-tr to-[#36383C] from-[#232428] rounded-3xl p-20 text-center">
        <h2 className="text-4xl mb-5 text-white">SALT POS SOLUTIONS</h2>
        <p className="text-[#D0D0D0]">
          Salt POS provides cannabis dispensary owners in every state with the
          solutions necessary to run <br /> their stores, their businesses and
          remain compliant with all laws and regulations in the states <br />{" "}
          where they operate.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-20 px-20 mb-10">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <Image
                src="/icons/checkIcon.png"
                width={31}
                height={30}
                alt="check icon"
              />
              <h3 className="text-3xl mt-2">{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PosSolutions;
