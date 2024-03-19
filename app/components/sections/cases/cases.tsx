import { PageBreak } from "../../SVGicons";
import CasesCarousel from "./casesCarousel";

const slides = [
  "/brj.svg",
  "/case_test.svg",
  "/case_test.svg",
  "/concentro.svg",
];

const Cases: React.FC = () => {
  return (
    <section className="px-6 mt-20" id="nossos-cases">
      <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
        NOSSO CASES
      </h1>
      <PageBreak />
      <div className="flex flex-col items-center lg:flex-row justify-around">
        <div className="mr-0 lg:mr-12 mb-10 lg:mb-0">
          <p className="pt-[15px] w-full max-w-lg px-5 lg:text-start">
            Algumas das soluções que desenvolvemos para solucionar os mais
            diversos problemas de nossos clientes. Isso aqui tem que ter muito
            mais texto do que atualmente tem tá ligado pra ter que ler mesmo é a
            parte mais importante desse código inteiro.
          </p>
        </div>
        <div className="mx-5 md:mx-14 lg:mx-10 xl:mx-10 2xl:mx-10">
          <CasesCarousel />
        </div>
      </div>
    </section>
  );
};

export default Cases;
