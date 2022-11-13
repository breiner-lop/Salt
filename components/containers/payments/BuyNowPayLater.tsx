import { NextPage } from 'next'
import Image from 'next/image'

const BuyNowPayLater: NextPage = () => {
  return <div className="px-14 pb-20 flex items-center">
      <div className="w-1/2">
    <Image
      src="/images/buynowpaylaterpayments.png"
      width={715}
      height={738}
      alt="cashlees atm"
    />
  </div>
  <div className="w-1/2 pl-5">
    <h2 className="text-5xl mb-5">BUY NOW PAY LATER</h2>
    <p>Customers instantly qualify for up to a $400 line of credit “Pay in 4” weekly financing option available at the POS.
<br /><br />
<strong><i>Salt takes on all of the collection risk.</i></strong>
</p>
    <ul className="list-disc mt-5 ml-6">
      <li>Network operator and owner of technology license</li>
      <li>Cloud-based multi redundant platform (10+ networks)</li>
      <li>Exact address on customer descriptor</li>
      <li>Less than 0.1% Chargebacks</li>
      <li>Infrastructure in place to provide credit card processing</li>
      <li>Once federally and nationally available based on existing</li>
      <li>Relationships with TSYS and multiple sponsor banks</li>
    </ul>
  </div>
</div>
}

export default BuyNowPayLater