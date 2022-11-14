import Header from "../components/containers/Home/Header";
import Salt from "../components/containers/Home/Salt";
import SaltFinance from "../components/containers/Home/SaltFinance";
import SaltLoyalty from "../components/containers/Home/SaltLoyalty";
import SaltPayments from "../components/containers/Home/SaltPayments";
import SaltPos from "../components/containers/Home/SaltPos";
import WeLead from "../components/containers/Home/WeLead";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <Header/>
        <WeLead/>
        <Salt/>
        <SaltPayments/>
        <SaltFinance/>
        <SaltPos/>
        <SaltLoyalty/>
      </main>
  )
}
