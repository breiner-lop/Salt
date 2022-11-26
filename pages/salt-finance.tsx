import { NextPage } from "next";
import FinanceHeader from "../components/containers/finance/FinanceHeader";
import InventoryFinancing from "../components/containers/finance/InventoryFinancing";
import MerchanCashAdvance from "../components/containers/finance/MerchanCashAdvance";
import OurClientReceive from "../components/containers/finance/OurClientReceive";
import SaltFinanceSeption from "../components/containers/finance/SaltFinanceSeption";
import { getFinanceInformation } from "../firebase/functions/financePage"

const SaltFinance: NextPage<any>= ({data}) => {
  return (
    <div>
      <FinanceHeader data={data.header.data} />
      <SaltFinanceSeption/>
      <OurClientReceive/>
      <MerchanCashAdvance/>
      <InventoryFinancing/>
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getFinanceInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default SaltFinance;
