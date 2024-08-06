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
    <div className="relative flex flex-col items-center rounded-lg border-[1px] border-spaceblue/40 w-[400px] m-5 p-4 bg-white shadow-md">
      <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
        <img
          src={backgroundSrc}
          className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          alt="background"
        />
        <div className="absolute -bottom-12 flex h-[160px] w-[160px] items-center justify-center rounded-full border-[4px] border-white">
          <img
            className="h-full w-full rounded-full"
            src={imageSrc}
            alt="foto de perfil"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700">{nome}</h4>
        <p className="text-base font-normal text-gray-600">{cargo}</p>
        <div className="mt-5 mb-2 flex justify-center">
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
  );
};

export default Card;

{
  /*       
  < div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        classNameName="flex-col flex items-center justify-center my-5 bg-transparent"
        style={{
          borderRadius: 97,

          backgroundImage: `url(${
            tipo === "1"
              ? "/fundo.svg"
              : tipo === "2"
              ? "fundo1.svg"
              : "fundo2.svg"
          })`,
          backgroundPositionX: "50%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: 600,
          height: 580,
        }}
      >
        <Image
          src={imageSrc}
          width={250}
          height={250}
          alt="foto de perfil"
          classNameName="mb-5 z-40 shadow-2xl"
          style={{
            borderRadius: "30%",
          }}
        />

        < div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          classNameName="z-40"
        >
          <h1 classNameName="w-full max-w-xs text-3xl font-bold text-center mb-2 text-white">
            {nome}
          </h1>
          <h2 classNameName="w-full max-w-xs text-xl text-center font-semibold text-gray-300 mb-3">
            {cargo}
          </h2>
          < div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            classNameName="flex justify-center"
          >
            <a
              href={linkedin}
              target="_blank"
              classNameName="mr-2 hover:scale-110 transition-transform duration-300"
            >
              <Linkedin />
            </a>
            <a
              href={github}
              target="_blank"
              classNameName="ml-2 hover:scale-110 transition-transform duration-300"
            >
              <Github />
            </a>
          </ div>
        </ div>
      </ div>*/
}
