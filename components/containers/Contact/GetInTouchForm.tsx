import { NextPage } from "next";
import SubmitBlueGradient from "../../buttons/SubmitBlueGradient";
import CheckboxWithLabel from "../../inputs/CheckboxWithLabel";
import InputWithLabel from "../../inputs/InputWithLabel";
import TextareaWithLabel from "../../inputs/TextareaWithLabel";

const GetInTouch: NextPage = () => {
  return (
    <div className="md:px-14 px-5 py-20 bg-white text-black">
      <h2 className="md:text-4xl text-3xl text-center tracking-wider">GET IN TOUCH NOW</h2>
      <p className="text-[#464646] text-center mt-5">
        Learn more about how our payment solutions can help streamline your{" "}
        <br /> cannabis retail operations.
        <br />
        <br />
        Our team will be happy to assist your needs and answer your questions.
      </p>
      {/** form */}
      <form className="lg:px-20 mt-10 text-[#212529]">
        <div className="grid grid-cols-2 gap-8">
          <InputWithLabel
            type="text"
            label="First name"
            name="firstname"
            placeholder="Enter first name"
            onChange={(e: any) => console.log(e.target.value)}
            required={true}
          />
          <InputWithLabel
            type="text"
            label="Last name"
            name="lastname"
            placeholder="Enter last name"
            onChange={(e: any) => console.log(e.target.value)}
            required={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mt-5">
          <InputWithLabel
            type="email"
            label="Email address"
            name="emailAddress"
            placeholder="Enter your email address"
            onChange={(e: any) => console.log(e.target.value)}
            required={true}
          />
          <InputWithLabel
            type="text"
            label="Name of Company"
            name="companyName"
            placeholder="Enter company name"
            onChange={(e: any) => console.log(e.target.value)}
            required={true}
          />
        </div>
        {/** services */}
        <div className="mb-5">
          <p className="mb-2 mt-6 text-lg">Services</p>
          <div className="grid grid-cols-2 lg:w-[35%]">
          <CheckboxWithLabel label="Salt Payments" name="saltPayments" onChange={(e: any) => console.log(e.target.value)} />
          <CheckboxWithLabel label="Salt POS" name="saltPos" onChange={(e: any) => console.log(e.target.value)} />
          <CheckboxWithLabel label="Salt Finance" name="salFinance" onChange={(e: any) => console.log(e.target.value)} />
          <CheckboxWithLabel label="Salt Gift & Loyalty" name="saltGiftLoyalty" onChange={(e: any) => console.log(e.target.value)} />
          </div>
        </div>
        <TextareaWithLabel label="Comments" name="comments" onChange={(e: any) => console.log(e.target.value)} placeholder="Enter your comments" />
        <div className="w-44 mx-auto mt-10">
        <SubmitBlueGradient text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
