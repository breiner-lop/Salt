import { NextPage } from "next";
import PosHeader from "../components/containers/pos/PosHeader";
import PosSolutions from "../components/containers/pos/PosSolutions";

const SaltPos: NextPage = () => {
  return (
    <div>
      <PosHeader />
      <PosSolutions />
    </div>
  );
};

export default SaltPos;
