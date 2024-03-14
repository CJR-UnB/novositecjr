import Image from "next/image";
import { Github, Linkedin } from "./SVGicons";

interface CardProps {
  imageSrc: string;
  nome: string;
  cargo: string;
  linkedin: string;
  github: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  nome,
  cargo,
  linkedin,
  github,
}) => {
  return (
    <>
      <div className="flex-col flex items-center justify-center w-fit p-5 mx-10 md:mx-32">
        <Image
          src={imageSrc}
          width={250}
          height={250}
          alt="foto de perfil"
          className="mb-5"
        />
        <h1 className="text-3xl font-semibold text-navyblue text-center mb-2">
          {nome}
        </h1>
        <h2 className="text-xl text-center mb-3">{cargo}</h2>
        <div className="flex">
          <a
            href={linkedin}
            target="_blank"
            className="mr-2 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin />
          </a>
          <a
            href={github}
            target="_blank"
            className="ml-2 hover:scale-110 transition-transform duration-300"
          >
            <Github />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
