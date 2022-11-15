import { NextPage } from "next";
import CardWithIconBlueTitleDescLMoreBlue from "../../cards/CardWithIconBlueTitleDescLMoreBlue";


const SaltFinanceSeption: NextPage = () => {
  return (
    <div id="saltFinancing" className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="text-5xl mb-3 text-center">SALT FINANCE</h2>
      <p className="text-[#545454] text-center">
      Salt Finance is a funding solution for cannabis businesses suffering from cash flow issues or simply in need of additional funds for expansion, inventory, marketing programs and more
      </p>
      <div className="mt-14 grid sm:grid-cols-2 grid-cols-1 lg:w-[900px] mx-auto">
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/mcash.png"
          title="Merchant Cash Advance"
          description="Quick, alternative lending for all working capital needs."
          href="merchant"
          iconWidth={45}
          smooth={true}
        />
        <CardWithIconBlueTitleDescLMoreBlue
          icon="/icons/ifinancing.png"
          title="Inventory Financing"
          description="Fund 100% of your invoice up front."
          href="financing"
          iconWidth={41}
          smooth={true}
        />
      </div>
    </div>
  );
};

export default SaltFinanceSeption;
