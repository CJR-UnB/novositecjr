import { PageBreak } from "./SVGicons";
import Map from "./map";

const OndeEstamos: React.FC = () => {
  return (
    <>
      <section className="">
        <h1 className="text-center text-navyblue font-bold text-4xl">
          ONDE ESTAMOS
        </h1>
        <PageBreak />
        <div className="inline">
          <Map />
        </div>
      </section>
    </>
  );
};

export default OndeEstamos;
