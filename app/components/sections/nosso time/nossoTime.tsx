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
            nome="Usuário"
            cargo="Presidente"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/daniel.png"
            nome="Daniel"
            cargo="Líder imagem e publicidade"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/lagartixa.png"
            nome="Largatixa"
            cargo="Líder da máfia chinesa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/mulher.png"
            nome="Mulher do GTA"
            cargo="funcionária pública"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/rafael.png"
            nome="Rafael"
            cargo="frontenddev"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/lagartixa.png"
            nome="Largatixa"
            cargo="Líder da máfia chinesa"
            linkedin=""
            github=""
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
