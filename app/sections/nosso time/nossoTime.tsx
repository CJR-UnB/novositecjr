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
            imageSrc=""
            nome="Marcos Neres"
            cargo="Diretor de Talentos"
            linkedin="https://www.linkedin.com/in/leandrokornelius/"
            github="https://github.com/LeandroKornelius"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc=""
            nome="José Wilson"
            cargo="Diretor Comercial"
            linkedin="https://www.linkedin.com/in/luiz-augusto-araújo-da-silva-09a937213/"
            github="https://github.com/LuizAugus10"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc=""
            nome="Sarah Novais"
            cargo="Diretora de Projetos"
            linkedin="https://www.linkedin.com/in/luiza-dos-santos-costa-b022a228a/"
            github="https://github.com/luizadsantos"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc=""
            nome="Luiza Santos"
            cargo="Presidente"
            linkedin="https://www.linkedin.com/in/pedro-joão-reffatti-pinheiro-b3b77b2aa/"
            github="https://github.com/pedrojoaorp"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc=""
            nome="Letícia Bonfim"
            cargo="Diretor de Publicidade"
            linkedin="https://www.linkedin.com/in/rodrigorafik/"
            github="https://github.com/maetsuji"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc=""
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
