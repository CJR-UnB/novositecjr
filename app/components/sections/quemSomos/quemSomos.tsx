import Image from "next/image";

const QuemSomos: React.FC = () => {
  return (
    <section
      className="mt-20 flex flex-col lg:flex-row px-5 justify-center items-center text-mutedSpaceblue"
      id="quem-somos"
      style={{}}
    >
      <div
        className="flex gap-8 mx-4 mb-10 lg:mb-0
      h-[14rem] xs:h-[14rem] sm:h-[20rem] md:h-[26rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[30rem]"
      >
        <div
          id="image"
          className="aspect-[1/1]
          h-[14rem] xs:h-[14rem] sm:h-[20rem] md:h-[26rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[30rem]"
        >
          <Image
            src="/sede.png"
            sizes="100vw"
            width={0}
            height={0}
            alt="sede"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="gap-8 flex flex-col">
          <div
            id="solid color"
            className="aspect-[1/1] bg-spaceblue
            h-[6rem] xs:h-[6rem] sm:h-[9rem] md:h-[12rem] lg:h-[9rem] xl:h-[11rem] 2xl:h-[14rem]"
          ></div>
          <div id="solid color" className="aspect-[1/1] bg-aquagreen"></div>
        </div>
      </div>
      <div
        id="parent"
        className="flex flex-col gap-8 mx-4 mb-40 sm:mb-10 md:mb-0
        h-[14rem] xs:h-[14rem] sm:h-[20rem] md:h-[26rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[30rem]"
      >
        <div id="child" className="flex flex-row gap-8">
          <div
            className="aspect-[1/1] bg-spaceblue
            h-[6rem] xs:h-[6rem] sm:h-[9rem] md:h-[12rem] lg:h-[9rem] xl:h-[11rem] 2xl:h-[14rem]"
          >
            <Image
              id="image"
              src={"/sedeclose.png"}
              sizes="100vw"
              width={0}
              height={0}
              alt="sede"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            id="solid color"
            className="aspect-[1/1] bg-aquagreen
            h-[6rem] xs:h-[6rem] sm:h-[9rem] md:h-[12rem] lg:h-[9rem] xl:h-[11rem] 2xl:h-[14rem]"
          ></div>
          <div
            className="aspect-[1/1] bg-spaceblue
            h-[6rem] xs:h-[6rem] sm:h-[9rem] md:h-[12rem] lg:h-[9rem] xl:h-[11rem] 2xl:h-[14rem]"
          >
            <Image
              id="image"
              src={"/sede.png"}
              sizes="100vw"
              width={0}
              height={0}
              alt="sede"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="my-auto flex w-[22rem] xs:w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[30rem] xl:w-[36rem] 2xl:w-[46rem]">
          <p className="">
            A CJR é uma empresa sem fins lucrativos fundada em 1999 por alunos
            da UnB com o objetivo de proporcionar um abiente de aprendizado,
            empreendedorismo e colaborativismo para universitários de cursos de
            computação. <br /> Competindo de igual para igual com grandes
            empresas, nós conquistamos clientes por meio de atendimentos e
            serviços de qualidade, com custos que somente uma EJ pode oferecer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
