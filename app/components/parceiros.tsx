import Image from "next/image";
import { PageBreak } from "./SVGicons";

const Parceiros: React.FC = () => {
  return (
    <>
      <section className="text-center text-navyblue font-bold text-4xl mt-20">
        <h1>NOSSOS PARCEIROS</h1>
        <PageBreak />
        <div className="flex flex-col md:flex-row items-center justify-around scale-75 md:scale-90 mx-20">
          <a href="https://brasiljunior.org.br" className="">
            <Image
              src="/brj.png"
              width={311}
              height={147}
              alt="brasil junior"
            />
          </a>
          <a href="https://concentrodf.com.br" className="mb-10 md:mb-0 mx-5">
            <Image
              src="/concentro.png"
              width={311}
              height={144}
              alt="concentro"
            />
          </a>
          <a href="https://www.cic.unb.br" className="">
            <Image src="/unb cic.png" width={311} height={146} alt="unb cic" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Parceiros;
