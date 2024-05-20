import Orcamento from "@/app/components/botaoOrcamento";
import Image from "next/image";

const QuemSomos: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const startingYear = 1999;
  const functioningYears = currentYear - startingYear;

  return (
    <section
      className="mt-28 sm:mt-40 lg:mt-60 xl:mt-96 text-mutedSpaceblue"
      id="quem-somos"
      style={{}}
    >
      <div className="absolute right-0 transform -translate-y-10 z-10">
        <svg
          width="366"
          height="517"
          viewBox="0 0 366 517"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M523.997 186.371C517.407 251.65 478.859 313.983 437.698 370.227C396.915 425.691 352.198 476.354 294.586 500.518C236.595 525.463 164.205 524.143 145.536 479.415C126.867 434.687 161.356 346.278 188.884 259.318C216.033 173.139 236.783 88.6814 284.308 42.2713C332.397 -3.86598 407.26 -11.9562 456.618 19.6737C506.355 50.5226 530.965 120.311 523.997 186.371Z"
            fill="#27BD80"
            fill-opacity="0.3"
          />
          <path
            d="M483.191 181.697C529.055 233.44 557.193 280.282 546.927 328.362C536.662 376.443 486.993 426.206 418.373 433.226C349.753 440.246 261.132 405.501 182.048 371.114C103.914 336.816 36.1658 304.034 11.5714 260.221C-13.0732 216.941 5.33546 163.698 61.9911 121.06C118.647 78.4208 214.448 47.0095 293.694 59.3141C372.89 72.1529 436.429 129.331 483.191 181.697Z"
            fill="#27BD80"
            fill-opacity="0.3"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-around px-5">
        <div className="z-20 p-5">
          <Image src="/TIME.png" width={800} height={800} alt="foto do time" />
        </div>
        <div className="mb-10 mr-5 flex flex-col lg:items-start items-center z-20">
          <h1 className="text-3xl w-full text-center lg:text-start max-w-2xl font-bold text-spaceblue">
            Há {functioningYears} anos transformando ideias em soluções
          </h1>
          <p className="pt-[15px] text-xl text-mutedSpaceblue leading-snug w-full max-w-3xl mb-8">
            A CJR é uma empresa sem fins lucrativos fundada em 1999 por alunos
            da UnB com o objetivo de proporcionar um abiente de aprendizado,
            empreendedorismo e colaborativismo para universitários de cursos de
            computação. <br /> Competindo de igual para igual com grandes
            empresas, nós conquistamos clientes por meio de atendimentos e
            serviços de qualidade, com custos que somente uma EJ pode oferecer.
            Algum texto maior e mais legal falando sobre a gente né poxa tá
            pequeno
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
