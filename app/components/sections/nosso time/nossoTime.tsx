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
            nome="Pedro João Reffatti"
            cargo="Presidente"
            linkedin="https://www.linkedin.com/in/pedro-joão-reffatti-pinheiro-b3b77b2aa/"
            github=""
            tipo="1"
          />
          <Card
            imageSrc="/daniel.png"
            nome="Victória Rocha"
            cargo="Diretora de Organização Empresarial"
            linkedin="https://www.linkedin.com/in/victória-rocha-191a9524b/"
            github=""
            tipo="2"
          />
          <Card
            imageSrc="/lagartixa.png"
            nome="Luiz Augusto Araújo"
            cargo="Diretor Comercial"
            linkedin="https://www.linkedin.com/in/luiz-augusto-araújo-da-silva-09a937213/"
            github="https://github.com/LuizAugus10"
            tipo="3"
          />
          <Card
            imageSrc="/mulher.png"
            nome="Leandro Kornelius"
            cargo="Diretor de aquisição de talentos"
            linkedin="https://www.linkedin.com/in/leandrokornelius/"
            github="https://github.com/LeoKornelius"
            tipo="2"
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Rodrigo Rafik"
            cargo="Diretor de Imagem e Publicidade"
            linkedin="https://www.linkedin.com/in/rodrigorafik/"
            github="https://github.com/maetsuji"
            tipo="3"
          />
          <Card
            imageSrc="/lagartixa.png"
            nome="Luiza dos Santos Costa"
            cargo="Diretora de Projetos"
            linkedin="https://www.linkedin.com/in/luiza-dos-santos-costa-b022a228a/"
            github="https://github.com/luizadsantos"
            tipo="1"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
