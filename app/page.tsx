import Image from "next/image";
import Contador from "./sections/contador/contador";
import Contato from "./sections/contato/contato";
import Depoimentos from "./sections/depoimentos/depoimentos";
import Footer from "./sections/footer";
import Header from "./sections/header/header";
import HomePage from "./sections/homepage";
import NossoTime from "./sections/nosso time/nossoTime";
import OndeEstamos from "./sections/onde estamos/OndeEstamos";
import Parceiros from "./sections/parceiros";
import QuemSomos from "./sections/quemSomos/quemSomos";
import Servicos from "./sections/servicos/servicos";

{
  /* As cores principais que combinamos no figma já estão gravadas nos arquivos do projeto com os seguintes nomes:
    aquagreen: "#27BD80",
    spaceblue: "#001830",
    mutedSpaceblue: "001830",
    offwhite: "#D9D9D9",
    spaceblue: "#002F67",
    white: "#FFFFFF",
    black: "#000000",
    green: "#73C04A",
o link para o design do site no figma:
https://www.figma.com/file/hrDGvvGvbkOCQ3se3v4rM5/CJR?type=design&node-id=1004-176&mode=design&t=ODQEH1MjWQWgwdHr-0
Se precisarem de ajuda com tailwind, vai aqui um cheatsheet para ajudar
https://tailwindcomponents.com/cheatsheet/

Vai ficar incrível
*/
}

export default function Home() {
  return (
    <main className="text-spaceblue bg-white font-Roboto ">
      <Header />
      <HomePage />
      <div className="absolute w-full transform -translate-y-16 md:-translate-y-32 ">
        <Image src={"/wave.svg"} width={2300} height={200} alt="waves" />
      </div>
      <Contador />
      <QuemSomos />
      <Servicos />
      <NossoTime />
      <Depoimentos />
      <OndeEstamos />
      <Parceiros />
      <Contato />
      <Footer />

      {/* <Cases /> os cases ainda não estão prontos para serem lançados*/}
    </main>
  );
}
