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
            imageSrc="halycia.png"
            nome="Halycia de Oliveira"
            cargo="Presidente"
            linkedin="https://www.linkedin.com/in/halycia-de-oliveira-fonseca-111513278/"
            github="https://github.com/halycia"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="giovana.png"
            nome="Giovana Barbosa"
            cargo="Diretora de Talentos e Tesouraria"
            linkedin="https://www.linkedin.com/in/giovana-barbosa-1b54991a3/"
            github="https://github.com/gio221"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="pedro.png"
            nome="Pedro Americo"
            cargo="Gerente Comercial"
            linkedin="https://www.linkedin.com/in/dev-pedro-americo/"
            github="https://github.com/dev-americo"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="adrielly.png"
            nome="Adrielly Lima"
            cargo="Diretora de Projetos"
            linkedin="www.linkedin.com/in/adrielly-limaa"
            github="https://github.com/aadriellyy"
            backgroundSrc="background.png"
          />

          <Card
            imageSrc="joao.png"
            nome="João Moreira"
            cargo="Diretor de Imagem e Publicidade"
            linkedin="https://www.linkedin.com/in/joao-felix-moreira-2a006b2a8/"
            github="https://github.com/joaofmoreiraa"
            backgroundSrc="background.png"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
