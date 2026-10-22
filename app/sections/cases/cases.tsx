import { PageBreak } from "@/app/components/SVGicons";
import ImageCarousel from "@/app/components/imageCarousel";

const Cases: React.FC = () => {
  return (
    <section className="px-5 mt-20" id="nossos-cases">
      <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
        NOSSOS CASES
      </h1>
      <PageBreak />
      <div className="mx-5 md:mx-14 lg:mx-10 xl:mx-10 2xl:mx-10">
        <ImageCarousel
          cases={[
            {
              title: "Plus Aprendizagens",
              description:
                "Concepção de um sistema de aulas particulares de cursinhos pré-vestibular. A proposta da plataforma é facilitar a interação entre professores e alunos, sendo possível marcar aulas e visualizar de forma rápida sua agenda, horários e pagamentos pendentes",
              image: "/Plus.png",

              link: "https://www.behance.net/gallery/211913433/Portfolio-CJR-2024",
            },
            {
              title: "Selo Social",
              description:
                "O objetivo do projeto Selo Social foi criar uma plataforma capaz de administrar o processo de treinamento e gestão da qualificação de empresas e organizações para o desenvolvimento de projetos alinhados ao Objetivo de desenvolvimento sustentável, a fim de promover e certificar aquelas que demonstram compromisso social local.",
              image: "/selo social.png",
              link: "https://www.behance.net/gallery/211913433/Portfolio-CJR-2024",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Cases;
