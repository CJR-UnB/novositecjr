// Code Generated with love
import { PageBreak } from "../components/SVGicons";
import HeaderAlt from "../sections/headerAlt/headerAlt";

export default function portfolio() {
  return (
    <main className="text-spaceblue">
      <HeaderAlt />
      <article>
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10">
          BLOG DA CJR
        </h1>
        <PageBreak />
        <p className="text-center text-xl text-mutedSpaceblue">
          Fique por dentro das novidadade na área da tecnologia e das notícias e
          conquistas da CJR
        </p>
      </article>
      <section
        id="portfolio"
        className="flex flex-wrap justify-around items-center mt-10 mx-2"
      ></section>
    </main>
  );
}
