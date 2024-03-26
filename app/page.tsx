"use client";

import Cases from "./components/sections/cases/cases";
import Contador from "./components/sections/contador/contador";
import Contato from "./components/sections/contato/contato";
import Depoimentos from "./components/sections/depoimentos/depoimentos";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header/header";
import HomePage from "./components/sections/homepage";
import NossoTime from "./components/sections/nosso time/nossoTime";
import OndeEstamos from "./components/sections/onde estamos/OndeEstamos";
import Parceiros from "./components/sections/parceiros";
import QuemSomos from "./components/sections/quemSomos/quemSomos";
import Servicos from "./components/sections/servicos/servicos";

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
      <div
        id="waves"
        className="transform w-full -translate-y-16 absolute z-10 overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1368 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1368 16.47L1335.32 13.2149C1302.64 9.99729 1237.28 3.48718 1172.22 1.05524C1107.02 -1.37669 1042.26 0.269543 977.056 7.30345C912 14.3374 846.64 26.8338 781.584 28.3304C716.376 29.8269 651.624 20.3237 586.416 17.106C521.36 13.851 456 16.8441 390.944 19.725C325.736 22.5685 260.984 25.3372 195.776 25.6365C130.72 25.9358 65.3601 23.8406 32.6801 22.7556L0 21.708V58H32.6801C65.3601 58 130.72 58 195.776 58C260.984 58 325.736 58 390.944 58C456 58 521.36 58 586.416 58C651.624 58 716.376 58 781.584 58C846.64 58 912 58 977.056 58C1042.26 58 1107.02 58 1172.22 58C1237.28 58 1302.64 58 1335.32 58H1368V16.47Z"
            fill="#27BD80"
          />
        </svg>
      </div>
      <Contador />
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
