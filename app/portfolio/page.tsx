// Code Generated with love

"use client";

import CaseCard from "./caseCard";
import Header from "./header";

export default function portfolio() {
  const navigationItems = [{ label: "", id: "" }];

  return (
    <main className="text-spaceblue bg-offwhite font-Roboto ">
      <Header navigationItems={navigationItems} />
      <section
        id="portfolo"
        className="flex flex-wrap justify-around items-center mt-10 mx-5"
      >
        <CaseCard
          titulo="Algum case"
          subtitulo="Alguma leve descrição"
          imgSrc="/case_base.svg"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
        <CaseCard
          titulo="Algum case"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={false}
        />
        <CaseCard
          titulo="Algum case"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={false}
        />
        <CaseCard
          titulo="Algum case"
          subtitulo="Alguma leve descrição"
          imgSrc="/lagartixa.png"
          imgAlt="Imagem de um case"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ullamcorper nunc, vel fermentum neque euismod eget. Donec id massa augue. Aliquam elementum enim faucibus eleifend accumsan. Ut ornare turpis sem, ac bibendum magna finibus a. Quisque vulputate lacinia vulputate. Proin non rutrum eros. Integer at pretium orci. Maecenas vel accumsan orci. "
          link="https://www.instagram.com/"
          invertido={true}
        />
      </section>
    </main>
  );
}
