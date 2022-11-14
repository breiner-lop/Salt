import { NextPage } from "next";
import Image from "next/image";

const BuyNowPayLater: NextPage = () => {
  return (
    <div className="md:px-14 px-5 pb-20 md:flex items-center bg-white text-black">
      <div className="md:w-1/2">
        <Image
          src="/images/buynowpaylaterpayments.png"
          width={715}
          height={738}
          alt="cashlees atm"
        />
      </div>
      <div className="md:w-1/2 md:pl-5 md:mt-0 mt-10">
        <h2 className="md:text-5xl text-3xl mb-5">BUY NOW PAY LATER</h2>
        <p>
          Customers instantly qualify for up to a $400 line of credit “Pay in 4”
          weekly financing option available at the POS.
          <br />
          <br />
          <strong>
            <i>Salt takes on all of the collection risk.</i>
          </strong>
        </p>
        <ul className="mt-5 ml-2">
          <li>1. Approved credit line consumer is ready for checkout/payment at dispensary or online</li>
          <li>2. Consumer chooses to pay with BNPL credit line</li>
          <li>3. A QR code is scanned via Salt platform or BNPL credit line card is presented</li>
          <li>4. Consumer’s pin is entered on the payment terminal</li>
          <li>5. Consumer is prompted to choose 30, 60, or 90-day repayment terms</li>
          <li>6. Merchant is paid</li>
          <li>7. Salt auto-debits consumer’s bank account at consumer’s chosen payment terms</li>
        </ul>
      </div>
    </div>
  );
};

export default BuyNowPayLater;
