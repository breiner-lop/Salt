import { NextPage } from "next";
import LoyaltyHeader from "../components/containers/loyalty/LoyaltyHeader";
import LoyaltyIsLeading from "../components/containers/loyalty/LoyaltyIsLeading";


const SaltLoyalty: NextPage = () => {
  return (
    <div>
      <LoyaltyHeader />
      <LoyaltyIsLeading />
    </div>
  );
};

export default SaltLoyalty;
