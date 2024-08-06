import Image from "next/image";

interface depoimentosProps {
  titulo: string;
  texto: string;
  imgSrc: string;
  nome: string;
  atividade: string;
}

const CardDepoimento: React.FC<depoimentosProps> = ({
  texto,
  imgSrc,
  nome,
  atividade,
  titulo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full rounded-lg bg-white">
      <div className="py-10 px-10 md:px-28 lg:px-72 xl:px-96 items-center flex flex-col rounded-lg">
        <h1 className="text-center text-3xl font-semibold mb-2 text-spaceblue">
          {titulo}
        </h1>
        <p className="text-center text-xl mb-10 text-mutedSpaceblue">{texto}</p>
        <Image
          src={imgSrc}
          width={50}
          height={50}
          alt="foto de perfil"
          className="mb-5 rounded-full"
        />
        <h2 className="font-semibold text-center text-spaceblue">{nome}</h2>
        <h3 className="text-mutedSpaceblue">{atividade}</h3>
      </div>
    </div>
  );
};

export default CardDepoimento;
