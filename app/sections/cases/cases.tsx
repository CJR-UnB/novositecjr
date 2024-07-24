import { PageBreak } from "@/app/components/SVGicons";
import ImageCarousel from "@/app/components/imageCarousel";

const Cases: React.FC = () => {
  return (
    <section className="px-5 mt-20" id="nossos-cases">
      <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
        NOSSOS CASES
      </h1>
      <PageBreak />
      {/*     <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-spaceblue">
          Desenvolvidos por pessoas que entendem sua dor, e entregam solução.
        </h1>
        <p className="pt-[15px] leading-snug text-2xl w-full lg:max-w-7xl px-0 text-mutedSpaceblue">
          Acreditamos firmemente que o verdadeiro valor de uma empresa reside em
          sua capacidade de compreender as dores do cliente e fornecer soluções
          eficazes e personalizadas. Cada caso apresentado é o resultado do
          trabalho árduo e da dedicação de nossa equipe, composta por indivíduos
          apaixonados e experientes, que se dedicam a entender as necessidades
          únicas de cada cliente.
        </p>
      </div> */}
      <div className="mx-5 md:mx-14 lg:mx-10 xl:mx-10 2xl:mx-10">
        <ImageCarousel
          cases={[
            {
              title: "Insituto Mente Aprendiz",
              description:
                "Desenvolvimento de um sistema para professores do Ensino Fundamental, com o objetivo de auxiliar na geração de relatórios sobre seus alunos. A montagem de documentos de acompanhamento de desempenho das crianças é um processo não só difícil, mas também muito trabalhoso, e o Mente Aprendiz tem o objetivo de fornecer ferramentas para os professores, tornando a criação desses documentos um processo mais simples e menos manual.",
              image: "/mente.png",
            },
            {
              title: "Plus Aprendizagens",
              description:
                "Concepção de um sistema de aulas particulares de cursinhos pré-vestibular. A proposta da plataforma é facilitar a interação entre professores e alunos, sendo possível marcar aulas e visualizar de forma rápida sua agenda, horários e pagamentos pendentes",
              image: "/Plus.png",
              style: { height: "400px" },
            },
            {
              title: "Selo Social",
              description:
                "O objetivo do projeto Selo Social foi criar uma plataforma capaz de administrar o processo de treinamento e gestão da qualificação de empresas e organizações para o desenvolvimento de projetos alinhados ao Objetivo de desenvolvimento sustentável, a fim de promover e certificar aquelas que demonstram compromisso social local.",
              image: "/selo social.png",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Cases;
