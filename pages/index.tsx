import Header from "../components/containers/Home/Header";
import Salt from "../components/containers/Home/Salt";
import SaltFinance from "../components/containers/Home/SaltFinance";
import SaltLoyalty from "../components/containers/Home/SaltLoyalty";
import SaltPayments from "../components/containers/Home/SaltPayments";
import SaltPos from "../components/containers/Home/SaltPos";
import WeLead from "../components/containers/Home/WeLead";
import { getHomeInformation } from "../firebase/functions/home"

export default function Home({data}:any) {
  console.log(data)
  return (
      <main className="overflow-hidden">
        {/**@ts-ignore */}
        <Header headerData={data.header.data} />
        <WeLead weLeadData={data.weLeadByExample.data}/>
        <Salt saltData={data.Salt.data}/>
        <SaltPayments paymentsData={data.SaltPayments.data}/>
        <SaltFinance financeData={data.SaltFinance.data}/>
        <SaltPos posData={data.SaltPost.data}/>
        <SaltLoyalty loyaltyData={data.SaltLoyalty.data}/>
      </main>
  )
}
export async function getServerSideProps() {
  let data={}
  await getHomeInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}
