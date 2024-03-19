import Image from "next/image";
import { PageBreak } from "../../SVGicons";
import QuemSomosItem from "./quemSomosItem";

const QuemSomos: React.FC = () => {
  return (
    <section className="mt-20 lg:px-32" id="quem-somos">
      <h1 className=" text-spaceblue font-bold text-4xl text-center">
        QUEM SOMOS
      </h1>
      <PageBreak />
      <div className="flex flex-col lg:flex-row gap-4 items-center lg:gap-8 lg:items-start justify-center">
        <div className="flex flex-row min-w-fit gap-4 max-w-[547px] lg:gap-8">
          <div className="h-[218px] w-[218px] lg:h-[356px] lg:w-[354px]">
            <Image
              alt="..."
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/quem_somos_1.png"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <QuemSomosItem bgcolor="spaceblue" />
            <QuemSomosItem bgcolor="aquagreen" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-[335px] lg:max-w-[547px] lg:gap-8">
          <QuemSomosItem src="/quem_somos_1.png" />
          <QuemSomosItem bgcolor="aquagreen" />
          <QuemSomosItem src="/quem_somos_1.png" />
          <div className="col-span-3 h-full">
            A CJR é uma empresa sem fins lucrativos fundada em 1999 por alunos
            da UnB com o objetivo de proporcionar um abiente de aprendizado,
            empreendedorismo e colaborativismo para universitários de cursos de
            computação. <br /> Competindo de igual para igual com grandes
            empresas, nós conquistamos clientes por meio de atendimentos e
            serviços de qualidade, com custos que somente uma EJ pode oferecer.
            <br /> Trabalhamos incansavelmente para agregar valor aos negócios
            de nossos clientes e estimular o cenário de empreendedorismo
            brasileiro, além de impactar diretamente o crescimento e evolução
            dos nossos membros.s, nós conquistamos clientes por meio de
            atendimentos e serviços de qualidade, com custos que somente uma EJ
            pode oferecer.
            <br /> Trabalhamos incansavelmente para agregar valor aos negócios
            de nossos clientes e estimular o cenário de empreendedorismo
            brasileiro, além de impactar diretamente o crescimento e evolução
            dos nossos membros.
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
