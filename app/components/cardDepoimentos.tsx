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
    <div className="flex flex-col px-16 md:px-96 py-10 h-fit items-center justify-center rounded-3xl bg-offwhite">
      <h1 className="text-center text-3xl font-semibold mb-2 text-spaceblue">
        {titulo}
      </h1>
      <p className="text-justify md:text-center text-xl mb-10 text-mutedSpaceblue">
        {texto}
      </p>
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
  );
};

export default CardDepoimento;
