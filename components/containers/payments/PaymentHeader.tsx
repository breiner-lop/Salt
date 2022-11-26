import LinkButtonBlueGradientSmooth from "../../linkButtons/LinkButtonBlueGradientSmooth";

const PaymentHeader = ({data}:any) => {
  return (
    <div style={{ backgroundImage:`url(${data.backgroundImage})`}} className="text-white pt-32 md:px-14 px-5 bg-center bg-cover bg-no-repeat h-[638px] flex items-center">
      <div>
        <h1 className="md:text-7xl text-5xl font-bold mb-3 leading-[122%] tracking-wider">
         { data.title }
        </h1>
        <p>{ data.description }</p>
        <div className="w-40 mt-10">
          <LinkButtonBlueGradientSmooth to="empawer" />
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
