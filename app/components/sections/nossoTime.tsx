import { PageBreak } from "../SVGicons";
import Card from "../cardEquipe";

const NossoTime: React.FC = () => {
  return (
    <>
      <section id="time">
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10">
          NOSSO TIME
        </h1>
        <PageBreak />

        <div className="flex flex-wrap justify-around items-center mb-20">
          <Card
            imageSrc="/user.jpeg"
            nome="Usuário"
            cargo="Presidente"
            linkedin=""
            github=""
            texto="Eu sou simplesmente incrível"
          />
          <Card
            imageSrc="/daniel.png"
            nome="Daniel"
            cargo="Líder imagem e publicidade"
            linkedin=""
            github=""
            texto="Eu nem sou mais líder kkkkkkk"
          />
          <Card
            imageSrc="/lagartixa.png"
            nome="Largatixa"
            cargo="Líder da máfia chinesa"
            linkedin=""
            github=""
            texto="eu amo subir paredes aleatórias"
          />
          <Card
            imageSrc="/mulher.png"
            nome="Mulher do GTA"
            cargo="funcionária pública"
            linkedin=""
            github=""
            texto="Fui assaltada"
          />
          <Card
            imageSrc="/rafael.png"
            nome="Rafael"
            cargo="Líder desse site"
            linkedin=""
            github=""
            texto="Eu to ficando mei doido das ideias"
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
