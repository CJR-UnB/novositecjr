import { PageBreak } from "../../SVGicons";
import Map from "./map";

const OndeEstamos: React.FC = () => {
  return (
    <>
      <section className="" id="onde-estamos">
        <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
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
