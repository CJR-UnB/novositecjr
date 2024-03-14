import { PageBreak } from "../SVGicons";
import Card from "../cardEquipe";

const NossoTime: React.FC = () => {
  return (
    <>
      <section id="nosso-time">
        <h1 className="text-center text-navyblue font-bold text-4xl md:text-5xl mt-10">
          NOSSO TIME
        </h1>
        <PageBreak />

        <div className="flex flex-wrap justify-around items-center mb-20">
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
          <Card
            imageSrc="/user.jpeg"
            nome="Membro"
            cargo="Líder de alguma coisa"
            linkedin=""
            github=""
          />
        </div>
      </section>
    </>
  );
};

export default NossoTime;
