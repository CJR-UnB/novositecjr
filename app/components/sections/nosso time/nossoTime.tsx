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

        <div className="flex flex-wrap justify-around items-center mb-20">
          <Card
            imageSrc="/user.jpeg"
            nome="Pejão"
            cargo="Presidente"
            linkedin="http://www.linkedin.com/in/pedro-jo%C3%A3o-reffatti-pinheiro-b3b77b2aa"
            github="https://github.com/pedrojoaorp"
            texto="Eu sou simplesmente incrível"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Leandro Beloti"
            cargo="Líder de Talentos"
            linkedin="https://www.linkedin.com/in/leandrokornelius/?locale=pt_BR"
            github="https://github.com/LeoKornelius"
            texto="eu amo subir paredes aleatórias"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Luiza"
            cargo="Líder de Desenvolvimento e Pesquisa"
            linkedin="https://www.linkedin.com/in/luiza-dos-santos-costa-b022a228a/"
            github="https://github.com/luizadsantos"
            texto="eu amo subir paredes aleatórias"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Rodrigo Rafik"
            cargo="Líder Imagem e Publicidade"
            linkedin="https://www.linkedin.com/in/rodrigorafik/"
            github="https://github.com/maetsuji"
            texto="Eu nem sou mais líder kkkkkkk"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Victória Rocha"
            cargo="Líder de Organização Empresarial"
            linkedin="http://www.linkedin.com/in/vict%C3%B3ria-rocha-191a9524b"
            github="https://github.com/rochavictoria"
            texto="Eu to ficando mei doido das ideias"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Luiz"
            cargo="Líder de Vendas"
            linkedin="http://linkedin.com/in/luiz-augusto-ara%C3%BAjo-da-silva-09a937213"
            github="https://github.com/LuizAugus10"
            texto="Fui assaltada"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
