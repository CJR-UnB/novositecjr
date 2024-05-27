import { PageBreak } from "../../SVGicons";
import Card from "./cardEquipe";

const NossoTime: React.FC = () => {
  return (
    <>
      <section className="mt-20" id="nosso-time">
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
          NOSSO TIME
        </h1>
        <PageBreak />

        <div className="flex flex-wrap justify-around items-center mb-20 gap-20">
          <Card
            imageSrc="/pejao.jpg"
            nome="Pedro João Reffatti"
            cargo="Presidente"
            github="https://github.com/pedrojoaorp"
            linkedin="https://www.linkedin.com/in/pedro-joão-reffatti-pinheiro-b3b77b2aa/"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="/victoria.jpg"
            nome="Victória Rocha"
            cargo="Diretora de Organização Empresarial"
            linkedin="https://www.linkedin.com/in/victória-rocha-191a9524b/"
            github="https://github.com/rochavictoria"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="/luiz.jpg"
            nome="Luiz Augusto Araújo"
            cargo="Diretor Comercial"
            linkedin="https://www.linkedin.com/in/luiz-augusto-araújo-da-silva-09a937213/"
            github="https://github.com/LuizAugus10"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="/leandro.jpg"
            nome="Leandro Kornelius"
            cargo="Diretor de Talentos"
            linkedin="https://www.linkedin.com/in/leandrokornelius/"
            github="https://github.com/LeoKornelius"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="/rafik.jpg"
            nome="Rodrigo Rafik"
            cargo="Diretor de Publicidade"
            linkedin="https://www.linkedin.com/in/rodrigorafik/"
            github="https://github.com/maetsuji"
            backgroundSrc="background.png"
          />
          <Card
            imageSrc="/luiza.jpg"
            nome="Luiza dos Santos Costa"
            cargo="Diretora de Projetos"
            linkedin="https://www.linkedin.com/in/luiza-dos-santos-costa-b022a228a/"
            github="https://github.com/luizadsantos"
            backgroundSrc="background.png"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
