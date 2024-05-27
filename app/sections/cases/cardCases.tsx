import Image from "next/image";

interface depoimentosProps {
  imgSrc: string;
}

const CardCases: React.FC<depoimentosProps> = ({ imgSrc }) => {
  return <Image src={imgSrc} width={800} height={450} alt="case" />;
};

export default CardCases;
