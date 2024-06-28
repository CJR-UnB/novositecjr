// Code Generated with love
import { PageBreak } from "../components/SVGicons";
import HeaderAlt from "../sections/headerAlt/headerAlt";
import CaseCard from "./caseCard";

export default function portfolio() {
  return (
    <main className="text-spaceblue bg-offwhite ">
      <HeaderAlt />
      <article>
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10">
          NOSSO PORTFOLIO
        </h1>
        <PageBreak />
        <p className="text-center text-xl text-mutedSpaceblue">
          Conheça alguns dos projetos que nossa equipe finalizou nos últimos
          anos.
        </p>
      </article>
      <section
        id="portfolio"
        className="flex flex-wrap justify-around items-center mt-10 mx-2"
      >
        <CaseCard
          titulo="Selo Social"
          subtitulo="Alguma leve descrição"
          imgSrc=""
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
        <CaseCard
          titulo="Mandou Bem"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={false}
        />
        <CaseCard
          titulo="FGM"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={false}
        />
        <CaseCard
          titulo="MurOn"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
        <CaseCard
          titulo="Insana"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
        <CaseCard
          titulo="SisterWave"
          subtitulo="Alguma leve descrição"
          imgSrc="/case_base.svg"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
      </section>
    </main>
  );
}
