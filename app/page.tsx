"use client";

import Contato from "./components/sections/contato";
import Depoimentos from "./components/sections/depoimentos";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Cases from "./components/sections/cases";
import HomePage from "./components/sections/homepage";
import NossoTime from "./components/sections/nossoTime";
import OndeEstamos from "./components/sections/OndeEstamos";
import Parceiros from "./components/sections/parceiros";
import Servicos from "./components/sections/servicos";
import Whatsapp from "./components/whatsappButton";
import QuemSomos from "./components/sections/quemSomos";

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
  const navigationItems = [{ label: "", id: "" }];

  return (
    <main className="text-spaceblue bg-white">
      <Header navigationItems={navigationItems} />
      <HomePage />
      <Whatsapp />
      {/* Aqui pode ter aquele coutdown de quantos projetos, anos de funcionamento, membros e nota de satisfação*/}
      <QuemSomos />
      <Cases />
      <Servicos />
      <NossoTime />
      <Depoimentos />
      <OndeEstamos />
      <Parceiros />
      <Contato />
      <Footer />
    </main>
  );
}
