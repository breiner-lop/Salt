import { NextPage } from "next";
import FinanceHeader from "../components/containers/finance/FinanceHeader";
import InventoryFinancing from "../components/containers/finance/InventoryFinancing";
import MerchanCashAdvance from "../components/containers/finance/MerchanCashAdvance";
import OurClientReceive from "../components/containers/finance/OurClientReceive";
import SaltFinanceSeption from "../components/containers/finance/SaltFinanceSeption";

const SaltFinance: NextPage = () => {
  return (
    <div>
      <FinanceHeader/>
      <SaltFinanceSeption/>
      <OurClientReceive/>
      <MerchanCashAdvance/>
      <InventoryFinancing/>
    </div>
  );
};

export default SaltFinance;
