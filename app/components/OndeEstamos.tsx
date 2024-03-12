import { PageBreak } from "./SVGicons";
import Map from "./map";

const OndeEstamos: React.FC = () => {
  return (
    <>
      <section className="">
        <div className="text-center text-navyblue font-bold text-4xl">
          ONDE ESTAMOS
        </div>
        <PageBreak />
        <div className="inline">
          <Map />
        </div>
      </section>
    </>
  );
};

export default OndeEstamos;
