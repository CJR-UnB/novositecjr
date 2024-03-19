import Image from "next/image";
import { Github, Linkedin } from "./SVGicons";
interface CardProps {
  imageSrc: string;
  nome: string;
  cargo: string;
  linkedin: string;
  github: string;
  texto?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  nome,
  cargo,
  linkedin,
  github,
  texto,
}) => {
  return (
    <>
      <div className="border-2 border-navyblue flex-col flex items-center justify-center w-fit p-5 m-10 mx-10 md:mx-32 rounded-lg bg-gradient-to-t from-gray-100 to-offwhite shadow-lg ">
        <Image
          src={imageSrc}
          width={250}
          height={250}
          alt="foto de perfil"
          className="mb-5 rounded-full"
        />

        <div>
          <h1 className="w-full max-w-xs text-3xl font-bold text-center mb-2 text-spaceblue">
            {nome}
          </h1>
          <h2 className="w-full max-w-xs text-xl text-center font-semibold text-mutedSpaceblue mb-3">
            {cargo}
          </h2>
          <p className="w-full max-w-xs mb-6 text-center text-mutedSpaceblue">
            {texto}
          </p>
          <div className="flex justify-center">
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
      </div>
    </>
  );
};

export default Card;
