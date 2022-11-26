import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export const getFinanceInformation = async () => {
  const querySnapshot = await getDocs(collection(firestore, "financePage"));
  let res = {};
  await querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res = { ...res, [doc.id]: { data: doc.data() } };
    console.log(doc.id, " => ", doc.data());
  });
  return res;
};
