import { NextPage } from "next";
import LoyaltyHeader from "../components/containers/loyalty/LoyaltyHeader";
import LoyaltyIsLeading from "../components/containers/loyalty/LoyaltyIsLeading";
import { getLoyaltyInformation } from "../firebase/functions/loyaltyPage"

const SaltLoyalty: NextPage<any> = ({ data }) => {
  return (
    <div>
      <LoyaltyHeader data={data.header.data}/>
      <LoyaltyIsLeading loyaltyLeadingData={data.salt_Loyalty_Is_The_Leading_Provider.data}/>
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getLoyaltyInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default SaltLoyalty;
