import { NextPage } from "next";
import PosHeader from "../components/containers/pos/PosHeader";
import PosSolutions from "../components/containers/pos/PosSolutions";
import { getPosInformation } from "../firebase/functions/posPage"

const SaltPos: NextPage<any> = ({data}) => {
  return (
    <div>
      <PosHeader data={data.header.data} />
      <PosSolutions posSolutionsData={data.saltPosSolutions.data}/>
    </div>
  );
};
export async function getServerSideProps() {
  let data={}
  await getPosInformation()
  .then((res)=>{
    data = res
  })
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default SaltPos;
