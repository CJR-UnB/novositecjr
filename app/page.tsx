"use client";

import OndeEstamos from "./components/OndeEstamos";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/homepage";
import Parceiros from "./components/parceiros";
{
  /* As cores principais que combinamos no figma já estão gravadas nos arquivos do projeto com os seguintes nomes:
    aquagreen: "#27BD80",
    spaceblue: "#001830",
    offwhite: "#D9D9D9",
    navyblue: "#002F67",
    white: "#FFFFFF",
    black: "#000000",
    green: "#18FF6D",
o link para o design do site no figma:
https://www.figma.com/file/hrDGvvGvbkOCQ3se3v4rM5/CJR?type=design&node-id=1004-176&mode=design&t=ODQEH1MjWQWgwdHr-0
Se precisarem de ajuda com tailwind, vai aqui um cheatsheet para ajudar
https://tailwindcomponents.com/cheatsheet/

Vai ficar incrível
*/
}

export default function Home() {
  return (
    <main className="text-spaceblue bg-offwhite">
      <Header />
      <HomePage />
      {/* Aqui pode ter aquele coutdown de quantos projetos, anos de funcionamento, membros e nota de satisfação*/}
      <section className="" id="quem somos">
        <h1>Quem somos</h1>
        <p>
          Desde 1999 conquistamos clientes a partir de atendimentos e serviços
          de qualidade. Trabalhamos incansavelmente para agregar valor aos
          negócios de nossos clientes e estimular o cenário de empreendedorismo
          brasileiro, além de impactar diretamente o crescimento e evolução dos
          nossos membros
        </p>
      </section>
      <section className="">Essa é a seção dos cases</section>
      <section className="">Essa é a seção do nossos serviços</section>
      <section className="">Essa é a seção do conheça nosso time</section>
      {/*Não esquecer do botão whatsapp*/}
      <OndeEstamos />
      <Parceiros />
      <section className="">
        Essa é a seção do como podemos te ajudar com links e formas de contato
      </section>
      <div></div>
      <Footer />
    </main>
  );
}
