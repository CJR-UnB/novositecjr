"use client";

import OndeEstamos from "./components/sections/OndeEstamos";
import Contato from "./components/sections/contato";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import HomePage from "./components/sections/homepage";
import Parceiros from "./components/sections/parceiros";
import Whatsapp from "./components/whatsappButton";

{
  /* As cores principais que combinamos no figma já estão gravadas nos arquivos do projeto com os seguintes nomes:
    aquagreen: "#27BD80",
    spaceblue: "#001830",
    offwhite: "#D9D9D9",
    navyblue: "#002F67",
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
  const navigationItems = [{ label: "", id: "quem-somos" }];

  return (
    <main className="text-spaceblue bg-white">
      <Header navigationItems={navigationItems} />
      <HomePage />
      <Whatsapp />
      {/* Aqui pode ter aquele coutdown de quantos projetos, anos de funcionamento, membros e nota de satisfação*/}
      <section className="" id="quem-somos">
        <h1>Quem somos</h1>
        <p>
          Desde 1999 conquistamos clientes a partir de atendimentos e serviços
          de qualidade. Trabalhamos incansavelmente para agregar valor aos
          negócios de nossos clientes e estimular o cenário de empreendedorismo
          brasileiro, além de impactar diretamente o crescimento e evolução dos
          nossos membros
        </p>
      </section>
      <section className="" id="nossos-cases">
        Essa é a seção dos cases
      </section>
      <section className="" id="servicos">
        Essa é a seção do nossos serviços
      </section>
      <section className="" id="nosso-time">
        Essa é a seção do conheça nosso time
      </section>
      {/*Não esquecer do botão whatsapp*/}
      <OndeEstamos />
      <Parceiros />
      <Contato />
      <Footer />
    </main>
  );
}
