import { PageBreak } from "@/app/components/SVGicons";
import Card from "./cardEquipe";

const NossoTime: React.FC = () => {
  return (
    <>
      <section className="mt-20" id="nosso-time">
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
          NOSSO TIME
        </h1>
        <PageBreak />
        {/* a b c d e f g h i j k l m n o p q r s t u v w x y z */}
        <div className="flex flex-wrap justify-around items-center mb-20 gap-20">
          <Card
            imageSrc="/marcos.jpg"
            nome="Marcos Neres"
            cargo="Diretor de Talentos"
            linkedin="https://linkedin.com/in/marcosalexsilvan"
            github="https://github.com/Marcolino5"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="will.jpg"
            nome="José Wilson"
            cargo="Diretor Comercial"
            linkedin="https://www.linkedin.com/in/wilsonsousajúnior/"
            github="https://github.com/WilsonSousajr"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="sarah.jpg"
            nome="Sarah Novais"
            cargo="Diretora de Projetos"
            linkedin="https://www.linkedin.com/in/sarahnovais/"
            github="https://github.com/sarahnovaiss"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="luiza.JPG"
            nome="Luiza Santos"
            cargo="Presidente"
            linkedin="https://www.linkedin.com/in/luiza-dos-santos-costa-b022a228a/"
            github="https://github.com/luizadsantos"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="leticia.jpg"
            nome="Letícia Bonfim"
            cargo="Diretor de Publicidade"
            linkedin="https://www.linkedin.com/in/leticia-bomfim-2b6b93316/"
            github="https://github.com/LetiBomfim"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="dudu.jpg"
            nome="Eduardo Barbosa"
            cargo="Diretora de Organização Empresarial"
            linkedin="https://www.linkedin.com/in/victória-rocha-191a9524b/"
            github="https://github.com/rochavictoria"
            backgroundSrc="background.png"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
