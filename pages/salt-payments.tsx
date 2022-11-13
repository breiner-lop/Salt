import { NextPage } from "next";
import Salt from "../components/containers/Home/Salt";
import BillMyBank from "../components/containers/payments/BillMyBank";
import BuyNowPayLater from "../components/containers/payments/BuyNowPayLater";
import CashlessAtm from "../components/containers/payments/CashlessAtm";
import Empawer from "../components/containers/payments/Empawer";
import PaymentHeader from "../components/containers/payments/PaymentHeader";

const Payments: NextPage = () => {
  return (
    <div>
      <PaymentHeader />
      <Empawer />
      <Salt />
      <CashlessAtm />
      <BuyNowPayLater />
      <BillMyBank />
    </div>
  );
};

export default Payments;
