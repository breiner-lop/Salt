import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export const getContactInformation = async () => {
  const querySnapshot = await getDocs(collection(firestore, "contactPage"));
  let res = {};
  await querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res = { ...res, [doc.id]: { data: doc.data() } };
    console.log(doc.id, " => ", doc.data());
  });
  return res;
};
