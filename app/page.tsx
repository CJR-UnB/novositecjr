import CustomIcon, { CJR } from "./components/SVGicons";
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
    <main className="text-spaceblue">
      <header className="justify-between bg-spaceblue text-gray-300 flex px-2 relative">
        <CJR className="scale-125 ml-40 self-center" />
        <div className="self-center text-2xl mr-24 space-x-40">
          <button className="group transition duration-300">
            Quem somos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Nossos Cases
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Serviços e Produtos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-aquagreen"></span>
          </button>
          <button className="bg-aquagreen py-7 px-20 text-black transition-colors duration-300 hover:bg-green ease-in">
            Contato
          </button>
        </div>
      </header>
      <section
        className="bg-spaceblue bg-contain text-white w-auto p-2 flex relative"
        id="Início"
        style={{ overflow: "hidden" }}
      >
        <div className="self-center ml-40">
          <h1 className="text-5xl w-full max-w-3xl mb-3 leading-snug">
            Desenvolvendo ideias e impulsionando resultados
          </h1>
          <p className="text-gray-200 text-xl mb-8 w-full max-w-md">
            A CJR tem a solução certa para digitalizar sua empresa e escalar
            seus serviços
          </p>
          <button className="bg-aquagreen rounded-xl py-3 px-16 text-2xl text-black transition-colors duration-300 hover:bg-green ease-linear">
            Faça um orçamento grátis
          </button>
        </div>
        <CustomIcon className="shrink-0 scale-125 overflow-hidden ml-auto mr-44 mt-32" />
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
