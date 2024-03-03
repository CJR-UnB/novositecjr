"use client";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import CustomIcon, { CJR, Menu } from "./components/SVGicons";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <main className="text-spaceblue">
      <header
        className="sticky top-0 justify-between bg-spaceblue text-gray-300 flex px-2 z-50"
        style={{ height: "10vh" }}
      >
        <div
          className="scale-125 ml-40 mr-10 self-center py-5 
        xs:ml-10 sm:ml-20 md:ml-20 lg:ml-32 xl:ml-40 2xl:ml-40"
        >
          <CJR />
        </div>
        <div className="self-center text-2xl mr-24 space-x-16 hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
          <button className="group transition duration-300">
            Quem somos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Nossos Cases
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Serviços e Produtos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="bg-aquagreen py-7 px-20 text-black transition-colors duration-300 hover:bg-green ease-in">
            Contato
          </button>
        </div>
        <button
          className="flex xs:flex sm:flex md:flex lg:flex xl:hidden items-center mr-10"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        <div
          ref={menuRef}
          className={`absolute right-0 mr-10 top-24 z-50 transition-all duration-300 transform origin-top ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div
            className="bg-white text-black p-8 rounded-lg w-full max-w-xs"
            style={{ alignItems: "center" }}
          >
            <button className="block mb-4" onClick={toggleMenu}>
              Quem somos
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Nossos Cases
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Serviços e Produtos
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Contato
            </button>
          </div>
        </div>
      </header>

      <section
        className="bg-spaceblue text-white p-1 flex relative
        flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
        id="Início"
        style={{ overflow: "hidden", height: "90vh" }}
      >
        <div
          className="px-5 mx-2
         m-auto lg:ml-32 xl:ml-40 2xl:ml-40
         mt-16 sm:mt-16 md:mt-20 lg:mt-auto xl:mt-auto 2xl:mt-auto"
        >
          <h1
            className=" w-full max-w-3xl mb-3 leading-snug text-left
          text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desenvolvendo ideias e impulsionando resultados")
                  .start();
              }}
            />
          </h1>
          <p
            className="text-gray-200 w-full max-w-xl text-left
          text-xl xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl"
          >
            A CJR tem a solução certa para digitalizar sua empresa e escalar
            seus serviços
          </p>
          <button
            className="bg-aquagreen rounded-xl mt-5 py-3 px-10 text-black transition-colors duration-300 hover:bg-green ease-linear
           hidden xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block 
           lg:text-xl xl:text-2xl 2xl:text-2xl"
          >
            Faça um orçamento grátis
          </button>
        </div>
        <div
          className="
        flex xs:flex sm:flex md:flex lg:block xl:block 2xl:block
        scale-90 xs:scale-90 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-125 2xl:scale-125
        mt-0 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-32 xl:mt-44 2xl:mt-44
        xs:ml-auto sm:ml-auto md:ml-auto lg: xl: 2xl:
        mr-44 xs: sm: md: lg:mr-10 xl:mr-44 2xl:mr-44
        justify-center items-center"
        >
          <CustomIcon className="shrink-0" />
        </div>
      </section>
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
      {/**/}
      <section className="">Essa é a seção do onde estamos</section>
      <section className="">Essa é a seção do nossos parceiros</section>
      <section className="">
        Essa é a seção do como podemos te ajudar com links e formas de contato
      </section>
      <footer className="">
        footer que contem as informações normais de um footer
      </footer>
    </main>
  );
}
