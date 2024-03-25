import Image from "next/image";
import { PageBreak } from "../SVGicons";

const Parceiros: React.FC = () => {
  return (
    <>
      <section
        className="text-center px-6 text-spaceblue font-bold text-4xl mt-20"
        id="parceiros"
      >
        <h1>NOSSOS PARCEIROS</h1>
        <PageBreak />
        <div className="flex flex-col md:flex-row items-center justify-around scale-75 md:scale-90 mx-20">
          <a
            href="https://brasiljunior.org.br"
            target="_blank"
            className="mb-20 md:mb-0"
          >
            <Image
              src="/brj.svg"
              width={311}
              height={147}
              alt="brasil junior"
            />
          </a>
          <a
            href="https://concentrodf.com.br"
            target="_blank"
            className="mb-28 md:mb-0 mx-0 sm:mx-10"
          >
            <Image
              src="/concentro.svg"
              width={311}
              height={144}
              alt="concentro"
            />
          </a>
          <a href="https://www.cic.unb.br" target="_blank" className="">
            <Image src="/unb cic.svg" width={311} height={146} alt="unb cic" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Parceiros;
