import { Github, Linkedin } from "@/app/components/SVGicons";

interface CardProps {
  backgroundSrc?: string;
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
  backgroundSrc,
}) => {
  return (
    <div className="relative flex flex-col items-center rounded-lg border border-spaceblue/40 w-[400px] min-h-[340px] m-5 p-4 bg-white shadow-md">
      
      {/* Background */}
      <div className="relative h-32 w-full">
        <img
          src={backgroundSrc}
          className="absolute h-full w-full rounded-xl object-cover"
          alt="background"
        />

        {/* Foto de perfil */}
        <div className="absolute left-1/2 -bottom-12 h-40 w-40 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white">
          <img
            className="h-full w-full object-cover"
            src={imageSrc}
            alt="foto de perfil"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="mt-20 flex flex-col items-center text-center px-2">
        <h4 className="text-xl font-bold text-navy-700">
          {nome}
        </h4>

        <p className="mt-1 text-base font-normal text-gray-600">
          {cargo}
        </p>

        {/* Ícones */}
        <div className="mt-5 mb-2 flex justify-center">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:scale-110 transition-transform duration-300"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;