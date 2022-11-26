import { NextPage } from "next";
import Salt from "../components/containers/Home/Salt";
import BillMyBank from "../components/containers/payments/BillMyBank";
import BuyNowPayLater from "../components/containers/payments/BuyNowPayLater";
import CashlessAtm from "../components/containers/payments/CashlessAtm";
import Empawer from "../components/containers/payments/Empawer";
import PaymentHeader from "../components/containers/payments/PaymentHeader";
import { getPaymentsInformation } from "../firebase/functions/payments"

const Payments = ({ data }:any) => {
  return (
    <div>
      <PaymentHeader data={data.header.data} />
      <Empawer />
      <Salt />
      <CashlessAtm />
      <BuyNowPayLater />
      <BillMyBank />
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getPaymentsInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Payments;
