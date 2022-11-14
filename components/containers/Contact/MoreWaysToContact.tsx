import { NextPage } from "next";

interface Props {}

const MoreWaysToContact: NextPage<Props> = ({}) => {
  return (
    <div className="md:px-2 px-5 md:flex pb-20 pt-10 bg-white text-black">
      {/** 1 seption */}
      <div className="md:w-1/2">
        <div className="mapouter mb-10">
          <div className="gmap_canvas">
            <iframe className="md:w-[572px] w-full"
              height="399"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=21550%20Biscayne%20Blvd%20%20Suite%20400%20%20Aventura,%20FL%2033180&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
            ></iframe>
          </div>
        </div>
      </div>
      {/** 2 seption */}
      <div className="md:w-1/2 md:pl-10 md:ml-20 md:mt-0 mt-10">
        <h2 className="text-4xl tracking-wider">
          MORE WAYS TO <br /> CONTACT US
        </h2>
          <div className="border rounded-2xl md:p-5 p-3 md:mr-10 mr-5 border-[#969696] my-7">
            <h3 className="text-xl">Email</h3>
            <p className="text-[#545454]">contact@salt.com</p>
        </div>
        <p className="text-lg">
          SALT <br />
          21550 Biscayne Blvd <br />
          Suite 400 <br />
          Aventura, FL 33180
        </p>
      </div>
    </div>
  );
};

export default MoreWaysToContact;
