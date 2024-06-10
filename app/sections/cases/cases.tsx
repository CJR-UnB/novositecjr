import { PageBreak } from "@/app/components/SVGicons";
import Link from "next/link";
import CasesCarousel from "./casesCarousel";

const Cases: React.FC = () => {
  return (
    <section className="px-5 mt-20" id="nossos-cases">
      <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
        NOSSO PORTFOLIO
      </h1>
      <PageBreak />
      <div className="flex flex-col items-center lg:flex-row justify-around">
        <div className="mr-0 lg:mr-12 mb-10 lg:mb-0 mt-10 items-center flex flex-col lg:items-start">
          <h1 className="text-3xl w-full lg:max-w-lg max-w-full font-bold text-spaceblue">
            Desenvolvidos por pessoas que entendem sua dor, e entregam solução.
          </h1>
          <p className="pt-[15px] leading-snug text-xl w-full lg:max-w-lg max-w-full px-0 text-mutedSpaceblue">
            Acreditamos firmemente que o verdadeiro valor de uma empresa reside
            em sua capacidade de compreender as dores do cliente e fornecer
            soluções eficazes e personalizadas. Cada caso apresentado é o
            resultado do trabalho árduo e da dedicação de nossa equipe, composta
            por indivíduos apaixonados e experientes, que se dedicam a entender
            as necessidades únicas de cada cliente.
          </p>
          <Link href="/portfolio">
            <button className="flex bg-green items-center text-xl w-fit text-black rounded-lg mt-5 py-3 px-10">
              <h1 className="mr-2">Conheça nosso portfolio</h1>
            </button>
          </Link>
        </div>
        <div className="mx-5 md:mx-14 lg:mx-10 xl:mx-10 2xl:mx-10">
          <CasesCarousel />
        </div>
      </div>
    </section>
  );
};

export default Cases;
